import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ProjectCategory } from '../../core/models/project.model';

type Filter = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule, ProjectCardComponent],
  template: `
    <div class="projects-page">
      <!-- Page Header -->
      <div class="page-hero">
        <div class="page-hero-bg">
          <div class="hero-grid"></div>
          <div class="hero-orb"></div>
        </div>
        <div class="page-hero-content">
          <nav class="breadcrumb">
            <a routerLink="/">Accueil</a>
            <i class="pi pi-chevron-right"></i>
            <span>Projets</span>
          </nav>
          <h1 class="page-title">
            Mes <span class="gold">Réalisations</span>
          </h1>
          <p class="page-desc">
            {{ projects().length }} projets alliant web Angular et mobile Flutter — des architectures propres pour des solutions durables.
          </p>
        </div>
      </div>

      <!-- Filters -->
      <div class="filters-bar">
        <div class="filters-inner">
          @for (filter of filters; track filter.value) {
            <button
              class="filter-btn"
              [class.active]="activeFilter() === filter.value"
              (click)="setFilter(filter.value)"
            >
              <i [class]="'pi ' + filter.icon"></i>
              {{ filter.label }}
              <span class="filter-count">{{ filterCount(filter.value) }}</span>
            </button>
          }
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="projects-container">
        <div class="projects-grid">
          @for (project of filteredProjects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>

        @if (filteredProjects().length === 0) {
          <div class="empty-state">
            <i class="pi pi-folder-open"></i>
            <p>Aucun projet dans cette catégorie</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .projects-page { min-height: 100vh; }

    .page-hero {
      padding: 7rem 2rem 4rem;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .page-hero-bg { position: absolute; inset: 0; pointer-events: none; }

    .hero-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .hero-orb {
      position: absolute;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%);
      top: -100px; right: 100px;
    }

    .page-hero-content {
      max-width: 1280px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .breadcrumb a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      transition: color 0.3s;
    }

    .breadcrumb a:hover { color: #D4AF37; }
    .breadcrumb .pi { color: rgba(255,255,255,0.25); font-size: 0.7rem; }
    .breadcrumb span { color: rgba(255,255,255,0.8); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      margin: 0 0 1rem;
    }
    .gold { color: #D4AF37; }

    .page-desc {
      color: rgba(255,255,255,0.5);
      font-size: 1.0625rem;
      max-width: 560px;
      line-height: 1.7;
    }

    /* FILTERS */
    .filters-bar {
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 0 2rem;
      position: sticky;
      top: 70px;
      z-index: 100;
      backdrop-filter: blur(20px);
    }

    .filters-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      gap: 0;
    }

    .filter-btn {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 1rem 1.5rem;
      color: rgba(255,255,255,0.5);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s;
    }

    .filter-btn:hover { color: rgba(255,255,255,0.8); }
    .filter-btn.active { color: #D4AF37; border-bottom-color: #D4AF37; }

    .filter-count {
      background: rgba(255,255,255,0.08);
      padding: 1px 7px;
      border-radius: 10px;
      font-size: 0.65rem;
    }

    .filter-btn.active .filter-count { background: rgba(212,175,55,0.2); color: #D4AF37; }

    /* GRID */
    .projects-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 3rem 2rem 5rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.5rem;
    }

    .empty-state {
      text-align: center;
      padding: 6rem 2rem;
      color: rgba(255,255,255,0.3);
    }

    .empty-state .pi {
      font-size: 3rem;
      display: block;
      margin-bottom: 1rem;
    }

    @media (max-width: 640px) {
      .projects-grid { grid-template-columns: 1fr; }
      .filters-inner { overflow-x: auto; }
      .filter-btn { white-space: nowrap; }
    }
  `]
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);
  projects = this.projectService.projects;
  activeFilter = signal<Filter>('all');

  filters = [
    { value: 'all' as Filter, label: 'Tous', icon: 'pi-th-large' },
    { value: 'web' as Filter, label: 'Web', icon: 'pi-desktop' },
    { value: 'mobile' as Filter, label: 'Mobile', icon: 'pi-mobile' },
    { value: 'fullstack' as Filter, label: 'Fullstack', icon: 'pi-server' },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.projects() : this.projects().filter(p => p.category === f);
  });

  setFilter(f: Filter) { this.activeFilter.set(f); }

  filterCount(f: Filter): number {
    return f === 'all' ? this.projects().length : this.projects().filter(p => p.category === f).length;
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    @if (project()) {
      <div class="detail-page">
        <!-- Hero Banner -->
        <div class="detail-hero" [style.background-image]="'url(' + project()!.imageUrl + ')'">
          <div class="detail-overlay"></div>
          <div class="detail-hero-content">
            <nav class="breadcrumb">
              <a routerLink="/">Accueil</a>
              <i class="pi pi-chevron-right"></i>
              <a routerLink="/projects">Projets</a>
              <i class="pi pi-chevron-right"></i>
              <span>{{ project()!.title }}</span>
            </nav>

            <div class="hero-meta">
              <span class="badge-cat" [class]="'cat-' + project()!.category">
                <i [class]="'pi ' + (project()!.category === 'mobile' ? 'pi-mobile' : 'pi-desktop')"></i>
                {{ project()!.category === 'mobile' ? 'Mobile' : 'Web' }}
              </span>
              <span class="badge-year">{{ project()!.year }}</span>
              <span class="badge-status" [class]="'status-' + project()!.status">
                {{ statusLabel(project()!.status) }}
              </span>
            </div>

            <h1 class="detail-title">{{ project()!.title }}</h1>
            <p class="detail-subtitle">{{ project()!.subtitle }}</p>
          </div>
        </div>

        <!-- Content -->
        <div class="detail-body">
          <div class="container">
            <div class="detail-grid">
              <!-- Main Content -->
              <main class="detail-main">
                <section class="content-section">
                  <h2>Description du projet</h2>
                  <p class="long-desc">{{ project()!.longDescription }}</p>
                </section>

                <section class="content-section">
                  <h2>Fonctionnalités principales</h2>
                  <ul class="features-list">
                    @for (feature of project()!.features; track feature) {
                      <li>
                        <i class="pi pi-check-circle"></i>
                        <span>{{ feature }}</span>
                      </li>
                    }
                  </ul>
                </section>

                <section class="content-section">
                  <h2>Stack Technologique</h2>
                  <div class="tech-grid">
                    @for (tech of project()!.technologies; track tech.name) {
                      <div class="tech-card" [style.border-color]="tech.color + '40'">
                        <i [class]="tech.icon" [style.color]="tech.color"></i>
                        <span>{{ tech.name }}</span>
                      </div>
                    }
                  </div>
                </section>

                @if (project()!.screenshots.length > 0) {
                  <section class="content-section">
                    <h2>Aperçus</h2>
                    <div class="screenshots-grid">
                      @for (shot of project()!.screenshots; track shot) {
                        <div class="screenshot">
                          <img [src]="shot" [alt]="project()!.title + ' screenshot'" loading="lazy" />
                        </div>
                      }
                    </div>
                  </section>
                }
              </main>

              <!-- Sidebar -->
              <aside class="detail-sidebar">
                <div class="sidebar-card">
                  <h3>Liens du projet</h3>
                  <div class="sidebar-links">
                    @if (project()!.links.demo) {
                      <a [href]="project()!.links.demo" target="_blank" class="sidebar-link demo">
                        <i class="pi pi-external-link"></i>
                        <span>Voir la démo</span>
                      </a>
                    }
                    @if (project()!.links.github) {
                      <a [href]="project()!.links.github" target="_blank" class="sidebar-link github">
                        <i class="pi pi-github"></i>
                        <span>Code source</span>
                      </a>
                    }
                    @if (project()!.links.store) {
                      <a [href]="project()!.links.store" target="_blank" class="sidebar-link store">
                        <i class="pi pi-apple"></i>
                        <span>Store</span>
                      </a>
                    }
                  </div>
                </div>

                <div class="sidebar-card">
                  <h3>Infos projet</h3>
                  <dl class="info-list">
                    <dt>Catégorie</dt>
                    <dd>{{ project()!.category === 'mobile' ? 'Application Mobile' : 'Application Web' }}</dd>
                    <dt>Année</dt>
                    <dd>{{ project()!.year }}</dd>
                    <dt>Statut</dt>
                    <dd [class]="'status-' + project()!.status">{{ statusLabel(project()!.status) }}</dd>
                    <dt>Technologies</dt>
                    <dd>{{ project()!.technologies.map(t => t.name).join(' · ') }}</dd>
                  </dl>
                </div>

                <div class="sidebar-cta">
                  <p>Intéressé par un projet similaire ?</p>
                  <a href="mailto:eliseefengangdev@gmail.com" class="btn-primary">
                    <i class="pi pi-envelope"></i>
                    Me contacter
                  </a>
                </div>
              </aside>
            </div>

            <!-- Navigation -->
            <div class="detail-nav">
              <a routerLink="/projects" class="btn-outline">
                <i class="pi pi-arrow-left"></i>
                Tous les projets
              </a>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="not-found">
        <i class="pi pi-exclamation-triangle"></i>
        <h2>Projet introuvable</h2>
        <a routerLink="/projects" class="btn-outline">Retour aux projets</a>
      </div>
    }
  `,
  styles: [`
    .detail-hero {
      height: 60vh;
      min-height: 400px;
      position: relative;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
    }

    .detail-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(8,8,20,0.3) 0%,
        rgba(8,8,20,0.95) 100%
      );
    }

    .detail-hero-content {
      position: relative;
      z-index: 1;
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
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
    .breadcrumb span { color: rgba(255,255,255,0.8); font-size: 0.8rem; }

    .hero-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .badge-cat {
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .cat-mobile { background: rgba(84,197,248,0.2); color: #54C5F8; border: 1px solid rgba(84,197,248,0.4); }
    .cat-web { background: rgba(221,0,49,0.2); color: #FF4466; border: 1px solid rgba(221,0,49,0.4); }

    .badge-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
    }

    .badge-status { font-size: 0.75rem; font-weight: 600; }
    .status-completed { color: #4CAF50; }
    .status-in-progress { color: #FF9800; }

    .detail-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      margin: 0 0 0.5rem;
    }

    .detail-subtitle {
      font-size: 1.125rem;
      color: #D4AF37;
      font-weight: 500;
      margin: 0;
    }

    /* BODY */
    .detail-body { padding: 4rem 0; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 4rem;
      align-items: start;
    }

    /* MAIN */
    .content-section {
      margin-bottom: 3rem;
    }

    .content-section h2 {
      font-size: 1.375rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.02em;
      margin: 0 0 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(212,175,55,0.2);
    }

    .long-desc {
      color: rgba(255,255,255,0.65);
      line-height: 1.85;
      font-size: 1.0625rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .features-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      color: rgba(255,255,255,0.7);
      font-size: 0.9375rem;
      line-height: 1.5;
    }

    .features-list .pi-check-circle { color: #D4AF37; font-size: 0.875rem; margin-top: 3px; flex-shrink: 0; }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tech-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid;
      padding: 0.75rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: rgba(255,255,255,0.8);
    }

    .tech-card .pi { font-size: 1rem; }

    .screenshots-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }

    .screenshot {
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .screenshot img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.4s;
      display: block;
    }

    .screenshot:hover img { transform: scale(1.05); }

    /* SIDEBAR */
    .sidebar-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .sidebar-card h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #D4AF37;
      font-weight: 700;
      margin: 0 0 1.25rem;
    }

    .sidebar-links { display: flex; flex-direction: column; gap: 0.75rem; }

    .sidebar-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;
      border: 1px solid;
    }

    .sidebar-link.demo { border-color: rgba(212,175,55,0.3); color: #D4AF37; background: rgba(212,175,55,0.05); }
    .sidebar-link.demo:hover { background: rgba(212,175,55,0.15); }
    .sidebar-link.github { border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); }
    .sidebar-link.github:hover { border-color: rgba(255,255,255,0.3); color: #fff; }
    .sidebar-link.store { border-color: rgba(84,197,248,0.3); color: #54C5F8; background: rgba(84,197,248,0.05); }
    .sidebar-link.store:hover { background: rgba(84,197,248,0.1); }

    .info-list { margin: 0; }
    .info-list dt {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.35);
      margin-top: 1rem;
    }
    .info-list dt:first-child { margin-top: 0; }
    .info-list dd {
      color: rgba(255,255,255,0.7);
      font-size: 0.875rem;
      margin: 0.25rem 0 0;
      font-weight: 500;
    }

    .sidebar-cta {
      background: rgba(212,175,55,0.06);
      border: 1px solid rgba(212,175,55,0.2);
      padding: 1.5rem;
      text-align: center;
    }

    .sidebar-cta p {
      color: rgba(255,255,255,0.55);
      font-size: 0.875rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #D4AF37, #B8860B);
      color: #000;
      padding: 0.75rem 1.5rem;
      font-weight: 800;
      font-size: 0.85rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      width: 100%;
      justify-content: center;
    }

    /* NAV */
    .detail-nav {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.07);
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(212,175,55,0.4);
      color: #D4AF37;
      padding: 0.75rem 1.5rem;
      font-weight: 700;
      font-size: 0.85rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s;
    }

    .btn-outline:hover { background: rgba(212,175,55,0.1); }

    /* NOT FOUND */
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      gap: 1rem;
      text-align: center;
      color: rgba(255,255,255,0.5);
    }

    .not-found .pi { font-size: 3rem; color: #D4AF37; }
    .not-found h2 { color: #fff; font-size: 1.5rem; }

    @media (max-width: 900px) {
      .detail-grid { grid-template-columns: 1fr; }
      .detail-sidebar { order: -1; }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project = signal<Project | undefined>(undefined);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project.set(this.projectService.getById(id));
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      completed: '● Terminé',
      'in-progress': '● En cours',
      archived: '● Archivé',
    };
    return map[status] ?? status;
  }
}

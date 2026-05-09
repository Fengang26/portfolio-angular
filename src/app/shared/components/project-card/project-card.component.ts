import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule, TagModule],
  template: `
    <article class="project-card" [class.featured]="project.featured" [routerLink]="['/projects', project.id]">
      <div class="card-image">
        <img [src]="project.imageUrl" [alt]="project.title" loading="lazy" />
        <div class="image-overlay"></div>
        <div class="card-badges">
          <span class="badge-category" [class]="'cat-' + project.category">
            <i [class]="'pi ' + (project.category === 'mobile' ? 'pi-mobile' : 'pi-desktop')"></i>
            {{ project.category === 'mobile' ? 'Mobile' : 'Web' }}
          </span>
          @if (project.featured) {
            <span class="badge-featured">⭐ Featured</span>
          }
        </div>
        <div class="card-status" [class]="'status-' + project.status">
          {{ statusLabel(project.status) }}
        </div>
      </div>

      <div class="card-body">
        <div class="card-year">{{ project.year }}</div>
        <h3 class="card-title">{{ project.title }}</h3>
        <p class="card-subtitle">{{ project.subtitle }}</p>
        <p class="card-desc">{{ project.description }}</p>

        <div class="tech-stack">
          @for (tech of project.technologies.slice(0, 3); track tech.name) {
            <span class="tech-pill" [style.border-color]="tech.color + '40'" [style.color]="tech.color">
              {{ tech.name }}
            </span>
          }
          @if (project.technologies.length > 3) {
            <span class="tech-pill more">+{{ project.technologies.length - 3 }}</span>
          }
        </div>

        <div class="card-footer">
          <span class="view-link">
            Voir le projet <i class="pi pi-arrow-right"></i>
          </span>
          <div class="card-links" (click)="$event.stopPropagation()">
            @if (project.links.github) {
              <a [href]="project.links.github" target="_blank" title="GitHub"><i class="pi pi-github"></i></a>
            }
            @if (project.links.demo) {
              <a [href]="project.links.demo" target="_blank" title="Demo"><i class="pi pi-external-link"></i></a>
            }
            @if (project.links.store) {
              <a [href]="project.links.store" target="_blank" title="App Store"><i class="pi pi-apple"></i></a>
            }
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .project-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      cursor: pointer;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.4s;
      pointer-events: none;
      z-index: 1;
    }

    .project-card:hover {
      border-color: rgba(212,175,55,0.4);
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.1);
    }

    .project-card:hover::before { opacity: 1; }

    .card-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card:hover .card-image img {
      transform: scale(1.08);
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 30%, rgba(8,8,20,0.9) 100%);
    }

    .card-badges {
      position: absolute;
      top: 12px;
      left: 12px;
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .badge-category {
      padding: 3px 10px;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .cat-mobile { background: rgba(84,197,248,0.2); color: #54C5F8; border: 1px solid rgba(84,197,248,0.4); }
    .cat-web { background: rgba(221,0,49,0.2); color: #FF4466; border: 1px solid rgba(221,0,49,0.4); }
    .cat-fullstack { background: rgba(62,207,142,0.2); color: #3ECF8E; border: 1px solid rgba(62,207,142,0.4); }

    .badge-featured {
      background: rgba(212,175,55,0.2);
      color: #D4AF37;
      border: 1px solid rgba(212,175,55,0.4);
      padding: 3px 10px;
      font-size: 0.7rem;
      font-weight: 700;
      backdrop-filter: blur(10px);
    }

    .card-status {
      position: absolute;
      bottom: 12px;
      right: 12px;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      font-weight: 700;
    }

    .status-completed { color: #4CAF50; }
    .status-in-progress { color: #FF9800; }
    .status-archived { color: rgba(255,255,255,0.4); }

    .card-body {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: #D4AF37;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      margin: 0 0 0.25rem;
      letter-spacing: -0.02em;
    }

    .card-subtitle {
      font-size: 0.8rem;
      color: #D4AF37;
      font-weight: 500;
      margin: 0 0 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-desc {
      color: rgba(255,255,255,0.55);
      font-size: 0.875rem;
      line-height: 1.65;
      flex: 1;
      margin-bottom: 1.25rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }

    .tech-pill {
      padding: 3px 10px;
      border: 1px solid;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .tech-pill.more {
      border-color: rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.4);
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.07);
    }

    .view-link {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.3s;
      font-weight: 500;
    }

    .project-card:hover .view-link {
      color: #D4AF37;
    }

    .card-links { display: flex; gap: 0.75rem; }
    .card-links a {
      color: rgba(255,255,255,0.35);
      transition: color 0.3s;
      font-size: 1rem;
    }
    .card-links a:hover { color: #D4AF37; }
  `]
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      completed: '● Terminé',
      'in-progress': '● En cours',
      archived: '● Archivé',
    };
    return map[status] ?? status;
  }
}

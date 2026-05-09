import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled()">
      <div class="header-inner">
        <a routerLink="/" class="logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">Elisée</span>
          <span class="logo-dot">.</span>
          <span class="logo-dev">dev</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <nav class="nav-links" [class.open]="menuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Accueil</a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projets</a>

         <a [routerLink]="['/']" fragment="about" (click)="closeMenu()">À propos</a>
         <a [routerLink]="['/']" fragment="contact">Contact</a>
          <a href="mailto:eliseefengangdev@gmail.com" class="nav-cta" (click)="closeMenu()">
            <span>Me contacter</span>
          </a>
        </nav>

        <button class="menu-toggle" (click)="toggleMenu()" [class.open]="menuOpen()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 2rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .site-header.scrolled {
      background: rgba(8, 8, 20, 0.95);
      backdrop-filter: blur(20px);
      padding: 0.875rem 2rem;
      border-bottom: 1px solid rgba(212, 175, 55, 0.15);
    }

    .header-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: -0.02em;
    }

    .logo-bracket { color: rgba(212, 175, 55, 0.5); }
    .logo-name { color: #fff; }
    .logo-dot { color: #D4AF37; }
    .logo-dev { color: rgba(255,255,255,0.6); }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-links a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      transition: color 0.3s;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: #D4AF37;
      transition: width 0.3s;
    }

    .nav-links a:hover, .nav-links a.active {
      color: #fff;
    }

    .nav-links a:hover::after, .nav-links a.active::after {
      width: 100%;
    }

    .nav-cta {
      background: linear-gradient(135deg, #D4AF37, #B8860B) !important;
      color: #000 !important;
      padding: 0.5rem 1.25rem;
      border-radius: 2px;
      font-weight: 700 !important;
    }

    .nav-cta::after { display: none !important; }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    .menu-toggle span {
      display: block;
      width: 24px;
      height: 2px;
      background: #fff;
      transition: all 0.3s;
    }

    @media (max-width: 768px) {
      .menu-toggle { display: flex; }
      .nav-links {
        position: fixed;
        top: 0; right: -100%;
        width: 75vw; height: 100vh;
        background: rgba(8,8,20,0.98);
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 1px solid rgba(212,175,55,0.2);
        backdrop-filter: blur(20px);
      }
      .nav-links.open { right: 0; }
      .nav-links a { font-size: 1.125rem; }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}

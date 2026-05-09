import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="lb">&lt;</span>Elisée<span class="dot">.</span><span class="dim">dev</span><span class="lb">/&gt;</span>
          </div>
          <p>Développeur Web & Mobile passionné, basé à Bafoussam, Cameroun. Je conçois des expériences digitales modernes avec Angular et Flutter.</p>
          <div class="socials">
            <a href="https://github.com" target="_blank" aria-label="GitHub"><i class="pi pi-github"></i></a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a>
            <a href="mailto:sandiey.fengang@gmail.com" aria-label="Email"><i class="pi pi-envelope"></i></a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a routerLink="/">Accueil</a></li>
            <li><a routerLink="/projects">Projets</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Technologies</h4>
          <ul>
            <li><a href="#">Angular</a></li>
            <li><a href="#">Flutter</a></li>
            <li><a href="#">Firebase</a></li>
            <li><a href="#">Supabase</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact</h4>
          <p><i class="pi pi-map-marker"></i> Bafoussam, Cameroun</p>
          <p><i class="pi pi-envelope"></i> sandiey.fengang&#64;gmail.com</p>
          <p><i class="pi pi-building"></i> dev.codexsoft</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ currentYear }} Élisée Sandiey Fengang — <span class="gold">dev.codexsoft</span>. Tous droits réservés.</p>
        <p>Construit avec <span class="gold">Angular</span> & <span class="gold">PrimeNG</span></p>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #050510;
      border-top: 1px solid rgba(212,175,55,0.15);
      padding: 4rem 2rem 2rem;
      margin-top: 6rem;
    }

    .footer-grid {
      max-width: 1280px;
      margin: 0 auto 3rem;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
    }

    .brand-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .lb { color: rgba(212,175,55,0.5); }
    .dot { color: #D4AF37; }
    .dim { color: rgba(255,255,255,0.5); }

    .footer-brand p {
      color: rgba(255,255,255,0.5);
      font-size: 0.875rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .socials { display: flex; gap: 1rem; }
    .socials a {
      width: 36px; height: 36px;
      border: 1px solid rgba(212,175,55,0.3);
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      transition: all 0.3s;
      font-size: 0.875rem;
    }
    .socials a:hover {
      border-color: #D4AF37;
      color: #D4AF37;
      background: rgba(212,175,55,0.1);
    }

    h4 {
      color: #D4AF37;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }

    ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    ul li a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s;
    }
    ul li a:hover { color: #fff; }

    .footer-contact p {
      color: rgba(255,255,255,0.5);
      font-size: 0.875rem;
      margin-bottom: 0.6rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .footer-contact .pi { color: #D4AF37; font-size: 0.75rem; }

    .footer-bottom {
      max-width: 1280px;
      margin: 0 auto;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.07);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      color: rgba(255,255,255,0.3);
      font-size: 0.8rem;
    }

    .gold { color: #D4AF37; }

    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
      .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

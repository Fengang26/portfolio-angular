import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ButtonModule, ProjectCardComponent],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="grid-lines"></div>
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>

      <div class="hero-content">
        <div class="hero-tag">
          <span class="dot-pulse"></span>
          Disponible pour de nouveaux projets
        </div>

        <h1 class="hero-title">
          <span class="line-1">Élisée Sandiey</span>
          <span class="line-2">Fengang</span>
          <span class="line-accent">Développeur Web & Mobile</span>
        </h1>

        <p class="hero-desc">
          Je crée des applications modernes et performantes avec
          <strong class="accent-text">Wordpress & Angular</strong> pour le web et
          <strong class="accent-text">Flutter</strong> pour le mobile.
          Basé à Douala, je transforme vos idées en expériences digitales exceptionnelles.
        </p>

        <div class="hero-ctas">
          <a routerLink="/projects" class="btn-primary">
            <span>Voir mes projets</span>
            <i class="pi pi-arrow-right"></i>
          </a>
          <a href="mailto:eliseefengangdev@gmail.com" class="btn-secondary">
            Me contacter
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">6+</span>
            <span class="stat-label">Projets réalisés</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">2+</span>
            <span class="stat-label">Années d'expérience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">3+</span>
            <span class="stat-label">Stacks maîtrisées</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="code-card">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="code-file">portfolio.dart</span>
          </div>
          <pre class="code-body"><code><span class="kw">class</span> <span class="cls">Developer</span> &#123;
  <span class="kw">final</span> <span class="typ">String</span> name <span class="op">=</span>
    <span class="str">'Élisée Fengang'</span>;

  <span class="kw">final</span> <span class="typ">List</span>&lt;<span class="typ">String</span>&gt; stack <span class="op">=</span> [
    <span class="str">'Angular'</span>,  <span class="cm">// Web</span>
    <span class="str">'Wordpress'</span>,  <span class="cm">// Web</span>
    <span class="str">'Flutter'</span>,  <span class="cm">// Mobile (Ios & Andoid)</span>
    <span class="str">'Firebase'</span>, <span class="cm">//Backend</span>
    <span class="str">'Supabase'</span>,<span class="cm">// Backend</span>
  ];

  <span class="kw">bool</span> get available <span class="op">=&gt;</span> <span class="kw">true</span>;
&#125;</code></pre>
        </div>

        <div class="tech-orbit">
          <div class="orbit-center">
            <i class="pi pi-code"></i>
          </div>
          @for (tech of techOrbit; track tech.name; let i = $index) {
            <div class="orbit-item" [style]="orbitStyle(i)">
              <span [style.color]="tech.color" [title]="tech.name">{{ tech.icon }}</span>
            </div>
          }
        </div>
      </div>

      <div class="scroll-hint">
        <span>Défiler</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- TECH SECTION -->
    <section class="tech-section">
      <div class="container">
        <div class="section-label">Stack Technologique</div>
        <div class="tech-grid">
          @for (tech of mainTechs; track tech.name) {
            <div class="tech-item" [style.--accent]="tech.color">
              <div class="tech-icon-wrapper">
                <i [class]="tech.pi"></i>
              </div>
              <div class="tech-info">
                <span class="tech-name">{{ tech.name }}</span>
                <span class="tech-role">{{ tech.role }}</span>
              </div>
              <div class="tech-level">
                <div class="level-bar">
                  <div class="level-fill" [style.width]="tech.level + '%'" [style.background]="tech.color"></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="projects-section" id="projects">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Projets</div>
          <h2 class="section-title">Réalisations <span class="gold">Récentes</span></h2>
          <p class="section-desc">Une sélection de mes meilleurs projets web et mobile, alliant design soigné et architecture solide.</p>
        </div>

        <div class="projects-grid">
          @for (project of featuredProjects(); track project.id) {
            <app-project-card [project]="project" />
          }
        </div>

        <div class="see-all">
          <a routerLink="/projects" class="btn-outline">
            <span>Tous les projets</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about-section" id="about">
      <div class="container about-grid">
        <div class="about-left">
          <div class="section-label">À Propos</div>
          <h2 class="section-title">Développeur passionné<br><span class="gold">par l'excellence</span></h2>
          <p>
            Fondateur de <strong class="gold">Home Finder Software</strong>, je suis développeur web et mobile basé à Douala, Cameroun.
            Ma passion s'étend d'Angular pour les applications web modernes à Flutter pour les expériences mobiles natives.
          </p>
          <p>
            Passionné par les architectures propres (Clean Architecture, BLoC, Feature Architecture), je conçois des solutions
            maintenables et scalables qui répondent aux véritables besoins des utilisateurs.
          </p>


          <div class="about-highlights">
            @for (item of highlights; track item.label) {
              <div class="highlight-item">
                <i [class]="'pi ' + item.icon" [style.color]="item.color"></i>
                <span>{{ item.label }}</span>
              </div>
            }
          </div>
        </div>

        <div class="about-right">
          <div class="expertise-card" title="Web - Angular">
            <div class="exp-header">
              <div class="exp-icon angular"><i class="pi pi-desktop"></i></div>
              <div>
                <h3>Développement Web</h3>
                <span class="exp-tech">Angular 17+ • TypeScript • PrimeNG</span>
              </div>
            </div>
            <p>Applications web modernes avec Angular Standalone Components, Signals, RxJS et une architecture feature-based robuste. Intégration Supabase/Firebase, paiements Stripe & CamPay.</p>
            <div class="exp-tags">
              <span>Angular</span><span>TypeScript</span><span>Supabase</span><span>Tailwind</span>
            </div>
          </div>

          <div class="expertise-card" title="Mobile - Flutter">
            <div class="exp-header">
              <div class="exp-icon flutter"><i class="pi pi-mobile"></i></div>
              <div>
                <h3>Développement Mobile</h3>
                <span class="exp-tech">Flutter • Dart • iOS & Android</span>
              </div>
            </div>
            <p>Applications mobiles cross-platform performantes avec Flutter, Clean Architecture et BLoC. Publication sur l'App Store avec gestion complète du cycle de vie iOS.</p>
            <div class="exp-tags">
              <span>Flutter</span><span>Dart</span><span>BLoC</span><span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-card">
          <div class="contact-glow"></div>
          <div class="section-label">Contact</div>
          <h2>Prêt à collaborer ?</h2>
          <p>Que vous ayez un projet web ou mobile, je suis disponible pour en discuter et vous accompagner de l'idée au déploiement.</p>
          <div class="contact-actions">
            <a href="mailto:sandiey.fengang@gmail.com" class="btn-primary">
              <i class="pi pi-envelope"></i>
              <span>eliseefengangdev&#64;gmail.com</span>
            </a>
            <div class="contact-links">
              <a href="https://github.com/Fengang26/" target="_blank"><i class="pi pi-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/elisee-fengang-9148952aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="pi pi-linkedin"></i> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* HERO */
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 7rem 4rem 4rem;
      position: relative;
      overflow: hidden;
      gap: 4rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .hero-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

    .grid-lines {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
    }
    .orb-1 { width: 500px; height: 500px; background: #D4AF37; top: -100px; right: -100px; }
    .orb-2 { width: 300px; height: 300px; background: #54C5F8; bottom: 100px; left: -50px; opacity: 0.1; }
    .orb-3 { width: 200px; height: 200px; background: #DD0031; top: 50%; left: 50%; opacity: 0.08; }

    .hero-content { position: relative; z-index: 1; }

    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(212,175,55,0.1);
      border: 1px solid rgba(212,175,55,0.25);
      padding: 6px 16px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #D4AF37;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    .dot-pulse {
      width: 8px; height: 8px;
      background: #4CAF50;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      margin: 0 0 1.5rem;
    }

    .line-1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .line-2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #D4AF37;
      letter-spacing: -0.03em;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .line-accent {
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 400;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .hero-desc {
      color: rgba(255,255,255,0.6);
      font-size: 1.0625rem;
      line-height: 1.8;
      max-width: 520px;
      margin-bottom: 2.5rem;
    }

    .accent-text { color: #D4AF37; font-weight: 700; }

    .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #D4AF37, #B8860B);
      color: #000;
      padding: 0.875rem 2rem;
      font-weight: 800;
      font-size: 0.9rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(212,175,55,0.4);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      border: 1px solid rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.8);
      padding: 0.875rem 2rem;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      border-color: #D4AF37;
      color: #D4AF37;
    }

    .hero-stats { display: flex; align-items: center; gap: 2rem; }

    .stat { text-align: center; }
    .stat-num {
      display: block;
      font-size: 2rem;
      font-weight: 900;
      color: #D4AF37;
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .stat-label {
      display: block;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 0.25rem;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: rgba(255,255,255,0.1);
    }

    /* HERO VISUAL */
    .hero-visual {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .code-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(212,175,55,0.2);
      width: 100%;
      max-width: 420px;
      overflow: hidden;
    }

    .code-header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 16px;
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot.red { background: #FF5F57; }
    .dot.yellow { background: #FFBD2E; }
    .dot.green { background: #28C840; }

    .code-file {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.4);
      margin-left: 8px;
    }

    .code-body {
      padding: 1.5rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      line-height: 1.7;
      margin: 0;
      overflow-x: auto;
    }

    .kw { color: #C792EA; }
    .cls { color: #FFCB6B; }
    .typ { color: #80CBC4; }
    .str { color: #C3E88D; }
    .cm { color: rgba(255,255,255,0.3); }
    .op { color: #89DDFF; }

    .tech-orbit {
      position: relative;
      width: 200px;
      height: 200px;
    }

    .orbit-center {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 60px; height: 60px;
      background: rgba(212,175,55,0.15);
      border: 2px solid rgba(212,175,55,0.4);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4AF37;
      font-size: 1.25rem;
    }

    .orbit-item {
      position: absolute;
      width: 40px; height: 40px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      animation: orbit-spin 20s linear infinite;
    }

    @keyframes orbit-spin {
      from { transform: rotate(var(--start-angle, 0deg)) translateX(85px) rotate(calc(-1 * var(--start-angle, 0deg))); }
      to { transform: rotate(calc(var(--start-angle, 0deg) + 360deg)) translateX(85px) rotate(calc(-1 * (var(--start-angle, 0deg) + 360deg))); }
    }

    .scroll-hint {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      z-index: 1;
    }

    .scroll-hint span {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: rgba(255,255,255,0.3);
    }

    .scroll-line {
      width: 1px;
      height: 50px;
      background: linear-gradient(to bottom, rgba(212,175,55,0.5), transparent);
      animation: scroll-down 2s ease-in-out infinite;
    }

    @keyframes scroll-down {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      50.1% { transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }

    /* TECH SECTION */
    .tech-section {
      padding: 5rem 2rem;
      background: rgba(255,255,255,0.01);
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .container { max-width: 1280px; margin: 0 auto; }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #D4AF37;
      margin-bottom: 1.5rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
    }

    .tech-item {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      padding: 1.25rem;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .tech-item:hover {
      border-color: var(--accent);
      background: rgba(255,255,255,0.05);
    }

    .tech-icon-wrapper {
      width: 40px; height: 40px;
      background: rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: var(--accent, #D4AF37);
    }

    .tech-info { display: flex; flex-direction: column; gap: 2px; }
    .tech-name { font-weight: 700; font-size: 0.9rem; color: #fff; }
    .tech-role { font-size: 0.75rem; color: rgba(255,255,255,0.4); }

    .level-bar {
      height: 3px;
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
      overflow: hidden;
    }

    .level-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 1s ease;
    }

    /* PROJECTS SECTION */
    .projects-section { padding: 5rem 2rem; }

    .section-header {
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      margin: 0.5rem 0 1rem;
    }

    .section-title .gold { color: #D4AF37; }

    .section-desc {
      color: rgba(255,255,255,0.5);
      max-width: 560px;
      line-height: 1.7;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.5rem;
    }

    .see-all {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(212,175,55,0.4);
      color: #D4AF37;
      padding: 0.875rem 2rem;
      font-weight: 700;
      font-size: 0.875rem;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s;
    }

    .btn-outline:hover {
      background: rgba(212,175,55,0.1);
      border-color: #D4AF37;
    }

    /* ABOUT */
    .about-section { padding: 5rem 2rem; }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }

    .about-left p {
      color: rgba(255,255,255,0.6);
      line-height: 1.8;
      margin-bottom: 1.25rem;
    }

    .about-left strong.gold { color: #D4AF37; font-weight: 700; }

    .about-highlights {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 2rem;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.875rem;
      color: rgba(255,255,255,0.7);
    }

    .about-right { display: flex; flex-direction: column; gap: 1.5rem; }

    .expertise-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 1.75rem;
      transition: all 0.3s;
    }

    .expertise-card:hover {
      border-color: rgba(212,175,55,0.3);
      background: rgba(255,255,255,0.05);
    }

    .exp-header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .exp-icon {
      width: 48px; height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .exp-icon.angular { background: rgba(221,0,49,0.15); color: #DD0031; }
    .exp-icon.flutter { background: rgba(84,197,248,0.15); color: #54C5F8; }

    .exp-header h3 { font-size: 1rem; font-weight: 700; margin: 0 0 0.25rem; color: #fff; }
    .exp-tech { font-size: 0.75rem; color: rgba(255,255,255,0.4); }

    .expertise-card p {
      color: rgba(255,255,255,0.55);
      font-size: 0.875rem;
      line-height: 1.7;
      margin-bottom: 1rem;
    }

    .exp-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .exp-tags span {
      padding: 3px 10px;
      border: 1px solid rgba(212,175,55,0.3);
      color: rgba(212,175,55,0.8);
      font-size: 0.7rem;
      font-weight: 600;
    }

    /* CONTACT */
    .contact-section { padding: 5rem 2rem; }

    .contact-card {
      background: rgba(212,175,55,0.04);
      border: 1px solid rgba(212,175,55,0.2);
      padding: 4rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .contact-glow {
      position: absolute;
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%);
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .contact-card h2 {
      font-size: 2.5rem;
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      margin: 1rem 0;
    }

    .contact-card p {
      color: rgba(255,255,255,0.55);
      max-width: 500px;
      margin: 0 auto 2.5rem;
      line-height: 1.7;
    }

    .contact-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .contact-links {
      display: flex;
      gap: 2rem;
    }

    .contact-links a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.3s;
    }

    .contact-links a:hover { color: #D4AF37; }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .hero { grid-template-columns: 1fr; padding: 7rem 2rem 4rem; text-align: center; }
      .hero-ctas, .hero-stats { justify-content: center; }
      .hero-visual { display: none; }
      .about-grid { grid-template-columns: 1fr; gap: 3rem; }
    }

    @media (max-width: 640px) {
      .projects-grid { grid-template-columns: 1fr; }
      .contact-card { padding: 2.5rem 1.5rem; }
    }
  `]
})
export class HomeComponent implements OnInit {
  private projectService = inject(ProjectService);
  featuredProjects = this.projectService.featuredProjects;

  techOrbit = [
    { name: 'Angular', icon: '🅰', color: '#DD0031' },
    { name: 'Flutter', icon: '🐦', color: '#54C5F8' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'TypeScript', icon: '𝙏', color: '#3178C6' },
    { name: 'Supabase', icon: '⚡', color: '#3ECF8E' },
    { name: 'Dart', icon: '🎯', color: '#00B4AB' },
  ];

  mainTechs = [
    { name: 'Angular 17+', role: 'Framework Web Principal', pi: 'pi pi-desktop', color: '#C850C0', level: 50 },
    { name: 'Flutter & Dart', role: 'Développement Mobile', pi: 'pi pi-mobile', color: '#54C5F8', level: 80 },
    { name: 'WordPress', role: 'CMS & Sites Web', pi: 'pi pi-globe', color: '#FF7A99', level: 75 },
    { name: 'Firebase', role: 'Backend & Temps réel', pi: 'pi pi-database', color: '#FFCA28', level: 70 },
    { name: 'Supabase', role: 'Backend Open Source', pi: 'pi pi-server', color: '#3ECF8E', level: 35 },
    { name: 'TypeScript', role: 'Language Typing', pi: 'pi pi-code', color: '#3178C6', level: 85 },
    { name: 'Tailwind CSS', role: 'Framework CSS', pi: 'pi pi-palette', color: '#56CFE1', level: 82 },
    { name: 'Trello', role: 'Gestion de tâches', pi: 'pi pi-table', color: '#0052CC', level: 85 },
    { name: 'Jira', role: 'Suivi de projets', pi: 'pi pi-ticket', color: '#00C2E0', level: 65 },
    { name: 'Vue.js', role: 'Framework Web', pi: 'pi pi-code', color: '#42B883', level: 35 },
    { name: 'Git & CI/CD', role: 'Versioning & Déploiement', pi: 'pi pi-share-alt', color: '#F05032', level: 80 },
  ];

  highlights = [
    { icon: 'pi-map-marker', label: 'Douala, Cameroun', color: '#D4AF37' },
    { icon: 'pi-building', label: 'Fondateur de Home Finder Software', color: '#54C5F8' },
    { icon: 'pi-graduation-cap', label: 'Licence en Informatique', color: '#4CAF50' },
    { icon: 'pi-star', label: 'Clean Architecture & Feature Architecture ', color: '#FF9800' },
    { icon: 'pi-globe', label: 'Applications bilingues FR/EN', color: '#9C27B0' },
  ];

  orbitStyle(index: number): string {
    const angle = (index / this.techOrbit.length) * 360;
    const delay = (index / this.techOrbit.length) * -20;
    return `
      top: 50%; left: 50%;
      transform: rotate(${angle}deg) translateX(85px) rotate(-${angle}deg);
      margin-top: -20px; margin-left: -20px;
      animation: orbit-spin 20s linear infinite;
      animation-delay: ${delay}s;
      --start-angle: ${angle}deg;
    `;
  }

  ngOnInit(): void {}
}

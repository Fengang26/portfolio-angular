import { Injectable, signal, computed } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly _projects = signal<Project[]>([
    {
      id: 1,
      title: 'HomeFinder',
      subtitle: 'Real Estate Andoid & iOS Application',
      description: 'Application mobile de recherche et gestion immobilière pour Android et iOS, avec carte interactive et filtres avancés.',
      longDescription: `HomeFinder est une application Andoid et iOS native développée avec Flutter, offrant une expérience utilisateur fluide pour la recherche de biens immobiliers. L'application intègre des cartes interactives, un système de filtrage avancé et une interface moderne inspirée des meilleures pratiques UX du marché.`,
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'REST API', icon: 'pi pi-database', color: '#FFCA28' },
        { name: 'GeoJSON', icon: 'pi pi-map', color: '#4CAF50' },
        { name: 'App Store', icon: 'pi pi-apple', color: '#A8A8A8' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      gradientColors: ['#1a1a2e', '#16213e'],
      featured: true,
      year: 2024,
      status: 'completed',
      links: { store: 'https://play.google.com/store/apps/details?id=dev.codexsoft.homefinder' },
      features: [
        'Carte interactive avec clusters de propriétés',
        'Filtres avancés (prix, superficie, localisation)',
        'Favoris et alertes personnalisées',
        'Visite virtuelle 360°',
        'Notifications push en temps réel',
        'Mode hors ligne avec cache intelligent',
      ],
      screenshots: [
        '/assets/immo.png',
        '/assets/immo1.png',
      ],
    },
    {
      id: 2,
      title: 'Home Finder Software',
      subtitle: 'Site Vitrine',
      description: 'Plateforme de presentation de l\'entreprise Home Finder Software',
      longDescription: `Home Finder Software est une plateforme vitrine  développée avec Angular 21+ (Standalone Components), Le design moderne utilise PrimeNG/PrimeIcon et l'application est déployée sur 02switch.`,
      category: 'web',
      technologies: [
        { name: 'Angular 21', icon: 'pi pi-code', color: '#DD0031' },
        { name: 'PrimeIcon', icon: 'pi pi-database', color: '#3ECF8E' },
        { name: 'PrimeNG', icon: 'pi pi-palette', color: '#38BDF8' },
        { name: '02switch', icon: 'pi pi-cloud', color: '#FFFFFF' },
      ],
      imageUrl: '/assets/hfs2.png',
      gradientColors: ['#0f0c29', '#302b63'],
      featured: true,
      year: 2026,
      status: 'completed',
      links: { demo: 'https://www.software.homefinder.click/', github: 'https://github.com/Fengang26/home-finder-software.git' },
      features: [
        'Site vitrine moderne et responsive',
        'Présentation professionnelle des services digitaux',
        'Navigation fluide entre les différentes sections',
        'Section À propos présentant la vision et les objectifs',
        'Formulaire de contact intégré pour demandes de services',
        'Intégration WhatsApp pour contact rapide',
        'Optimisation SEO pour meilleure visibilité en ligne',
        'Compatible mobile, tablette et ordinateur',
        'Interface utilisateur moderne avec expérience fluide',
      ],
      screenshots: [
        '/assets/hfs1.png',
        '/assets/hfs2.png',
      ],
    },
    {
      id: 3,
      title: 'Webgency',
      subtitle: 'Site Web de reservation',
      description: 'Application web de reservation et d\'invitation pour la realisation des services.',
      longDescription: `Webgency  est un site vitrine développé sous WordPress, conçu pour présenter des services de création d’invitations numériques modernes et personnalisées pour différents types d’événements. Le site met en avant une interface élégante et intuitive permettant aux visiteurs de découvrir des modèles d’invitations digitales adaptés aux mariages, anniversaires, baptêmes, conférences et autres cérémonies`,
      category: 'web',
      technologies: [
        { name: 'Wordpress', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'Elementor', icon: 'pi pi-database', color: '#3ECF8E' },
        { name: 'Hello Elementor', icon: 'pi pi-chart-line', color: '#FF9800' },
        { name: '02switch', icon: 'pi pi-sitemap', color: '#3D8CEA' },
      ],
      imageUrl: '/assets/webgency.png',
      gradientColors: ['#0a0a0a', '#1a1a1a'],
      featured: false,
      year: 2026,
      status: 'in-progress',
      links: { demo: 'https://www.invitation.homefinder.click/' },
      features: [
        'Création d’invitations numériques personnalisées',
        'Design moderne et élégant pour événements',
        'Gestion des invitations de mariage, anniversaire et cérémonies',
        'Partage rapide des invitations via lien ou réseaux sociaux',
        'Interface responsive compatible mobile et ordinateur',
        'Personnalisation des informations de l’événement',
        'Navigation fluide et expérience utilisateur moderne',
        'Présentation professionnelle des services d’invitation',
        'Formulaire de contact pour commandes personnalisées',
      ],
      screenshots: [
        '/assets/webgency.png',
        '/assets/webgency1.png',
      ],
    },
    {
      id: 4,
      title: 'Matthieu 25:6 Cantique',
      subtitle: 'Application Hymnaire Multilingue',
      description: 'Application hymnaire multilingue (FR/EN/ES/PT) avec lecture audio offline, Clean Architecture et BLoC.',
      longDescription: `Matthieu 25:6 Cantique est une application Flutter complète dédiée aux cantiques religieux, disponible en 4 langues. Elle utilise Firebase Firestore comme backend, implémente la Clean Architecture avec le pattern BLoC, offre une lecture audio avec mise en cache offline intelligente et une interface épurée centrée sur l'expérience de lecture.`,
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'Firebase', icon: 'pi pi-database', color: '#FFCA28' },
        { name: 'BLoC', icon: 'pi pi-sitemap', color: '#3D8CEA' },
        { name: 'Audio', icon: 'pi pi-volume-up', color: '#FF6B6B' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
      gradientColors: ['#1a0533', '#2d1b69'],
      featured: true,
      year: 2024,
      status: 'in-progress',
      links: { store: '#', github: '#' },
      features: [
        '4 langues : Français, English, Español, Português',
        'Lecture audio avec mise en cache offline',
        'Recherche full-text dans tous les cantiques',
        'Favoris et historique de lecture',
        'Clean Architecture + BLoC pattern',
        'Thème clair/sombre adaptatif',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80',
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
      ],
    },

    {
      id: 5,
      title: 'Recueil de Cantiques',
      subtitle: 'Hymnaire Bilingue FR/EN',
      description: 'Application hymnaire bilingue avec notifications push, Firebase backend et une identité visuelle forte avec un aigle chauve.',
      longDescription: `Recueil de Cantiques est une application Flutter bilingue (FR/EN) dédiée aux cantiques chrétiens. Elle intègre Firebase pour le backend et les notifications push, une Clean Architecture robuste et une identité visuelle distinctive incluant un logo avec un aigle chauve symbolisant la force et la liberté.`,
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'Firebase', icon: 'pi pi-database', color: '#FFCA28' },
        { name: 'Push Notif', icon: 'pi pi-bell', color: '#FF5722' },
        { name: 'Clean Arch', icon: 'pi pi-sitemap', color: '#9C27B0' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      gradientColors: ['#0d1117', '#161b22'],
      featured: false,
      year: 2023,
      status: 'completed',
      links: { store: '#' },
      features: [
        'Bilingue Français / English',
        'Notifications push personnalisées',
        'Mode hors ligne complet',
        'Partage social des cantiques',
        'Taille de police ajustable',
        'Logo exclusif aigle chauve',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80',
      ],
    },
    {
      id: 6,
      title: 'Portfolio',
      subtitle: 'Portfolio personnel',
      description: 'Portfolio personnel développé avec Angular 21+ et PrimeNG, présentant mes projets web et mobile avec un design Dark Luxury moderne.',
      longDescription: `Ce portfolio est une application Angular 21+ complète construite avec une architecture Feature-Based et des Standalone Components. Il présente l'ensemble de mes réalisations web et mobile à travers une interface Dark Luxury soignée, avec une palette dorée distinctive et des animations CSS fluides. La navigation utilise le lazy loading et la View Transitions API native d'Angular pour des transitions de pages élégantes. L'AppBar est construite avec le composant PrimeNG Toolbar, offrant un effet glassmorphism au scroll et un Drawer mobile responsive. Les projets sont filtrables par catégorie (Web / Mobile) et chaque projet dispose d'une page détail complète avec description, fonctionnalités, stack technologique et captures d'écran. Le site est entièrement responsive, optimisé pour la production avec code splitting, et déployable sur Vercel `,
      category: 'web',
      technologies: [
        { name: 'Angular', icon: 'pi pi-code', color: '#DD0031' },
        { name: 'PrimeNG', icon: 'pi pi-prime', color: '#10B981' },
        { name: 'TypeScript', icon: 'pi pi-code', color: '#3178C6' },
        { name: 'Vercel', icon: 'pi pi-database', color: '#FFCA28' },
      ],
      imageUrl: '/assets/portfolio21.png',
      gradientColors: ['#0f2027', '#203a43'],
      featured: false,
      year: 2026,
      status: 'completed',
      links: { demo: 'https://portfolio-elisee.vercel.app' },
      features: [
        'Architecture Feature-Based avec Angular 17+ Standalone Components',
        'Navigation lazy loading avec View Transitions API',
        'Page d\'accueil avec hero animé et section technologies',
        'Grille de projets avec filtres par catégorie (Web / Mobile)',
        'Page détail de projet avec sidebar et captures d\'écran',
        'AppBar PrimeNG Toolbar avec effet glassmorphism au scroll',
        'Drawer mobile PrimeNG pour la navigation responsive',
        'Design Dark Luxury avec palette dorée #D4AF37',
        'Typo Outfit + JetBrains Mono via Google Fonts',
        'Scroll vers ancres (#about, #contact) depuis toutes les pages',
        'Section À propos avec cartes Angular vs Flutter',
        'Formulaire de contact par email',
        'Footer complet avec liens sociaux et stack technologique',
        'Build de production optimisé avec code splitting',
      ],
      screenshots: [
        '/assets/portfolio.png',
        '/assets/portfolio1.png',
      ],
    },
  ]);

  readonly projects = this._projects.asReadonly();

  readonly featuredProjects = computed(() =>
    this._projects().filter(p => p.featured)
  );

  getById(id: number) {
    return this._projects().find(p => p.id === id);
  }

  getByCategory(category: ProjectCategory) {
    return this._projects().filter(p => p.category === category);
  }
}

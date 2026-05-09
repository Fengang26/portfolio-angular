import { Injectable, signal, computed } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly _projects = signal<Project[]>([
    {
      id: 1,
      title: 'HomeFinder',
      subtitle: 'Real Estate iOS Application',
      description: 'Application mobile de recherche et gestion immobilière pour iOS, avec carte interactive et filtres avancés.',
      longDescription: `HomeFinder est une application iOS native développée avec Flutter, offrant une expérience utilisateur fluide pour la recherche de biens immobiliers. L'application intègre des cartes interactives, un système de filtrage avancé et une interface moderne inspirée des meilleures pratiques UX du marché.`,
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'Firebase', icon: 'pi pi-database', color: '#FFCA28' },
        { name: 'GeoJSON', icon: 'pi pi-map', color: '#4CAF50' },
        { name: 'App Store', icon: 'pi pi-apple', color: '#A8A8A8' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      gradientColors: ['#1a1a2e', '#16213e'],
      featured: true,
      year: 2024,
      status: 'completed',
      links: { store: '#' },
      features: [
        'Carte interactive avec clusters de propriétés',
        'Filtres avancés (prix, superficie, localisation)',
        'Favoris et alertes personnalisées',
        'Visite virtuelle 360°',
        'Notifications push en temps réel',
        'Mode hors ligne avec cache intelligent',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80',
      ],
    },
    {
      id: 2,
      title: 'SavoirNova',
      subtitle: 'Plateforme de Vente de Livres Numériques',
      description: 'Plateforme bilingue (FR/EN) de vente de livres numériques, avec paiement Stripe & CamPay et backend Supabase.',
      longDescription: `SavoirNova est une plateforme e-commerce bilingue développée avec Angular 17+ (Standalone Components), intégrant Supabase comme backend, Stripe et CamPay pour les paiements, et Transloco pour l'internationalisation. Le design moderne utilise DaisyUI/Tailwind CSS et l'application est déployée sur Vercel.`,
      category: 'web',
      technologies: [
        { name: 'Angular 17', icon: 'pi pi-code', color: '#DD0031' },
        { name: 'Supabase', icon: 'pi pi-database', color: '#3ECF8E' },
        { name: 'Stripe', icon: 'pi pi-credit-card', color: '#635BFF' },
        { name: 'Tailwind', icon: 'pi pi-palette', color: '#38BDF8' },
        { name: 'Vercel', icon: 'pi pi-cloud', color: '#FFFFFF' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
      gradientColors: ['#0f0c29', '#302b63'],
      featured: true,
      year: 2024,
      status: 'in-progress',
      links: { demo: '#', github: '#' },
      features: [
        'Catalogue bilingue FR/EN avec Transloco',
        'Paiement Stripe (international) et CamPay (Cameroun)',
        'Gestion des téléchargements sécurisés',
        'Tableau de bord auteur',
        'Système de reviews et notations',
        'PWA avec mode hors ligne',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80',
      ],
    },
    {
      id: 3,
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
      year: 2023,
      status: 'completed',
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
      id: 4,
      title: 'FitLog',
      subtitle: 'Application de Suivi Fitness',
      description: 'Application mobile de tracking fitness avec tableaux de bord analytiques, plans personnalisés et suivi nutritionnel.',
      longDescription: `FitLog est une application Flutter de suivi fitness full-featured. Elle propose des tableaux de bord analytiques avec graphiques interactifs, la création de plans d'entraînement personnalisés, le suivi nutritionnel et une synchronisation cloud. L'interface est inspirée des meilleures apps fitness du marché avec une UX gamifiée.`,
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: 'pi pi-mobile', color: '#54C5F8' },
        { name: 'Supabase', icon: 'pi pi-database', color: '#3ECF8E' },
        { name: 'Charts', icon: 'pi pi-chart-line', color: '#FF9800' },
        { name: 'BLoC', icon: 'pi pi-sitemap', color: '#3D8CEA' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      gradientColors: ['#0a0a0a', '#1a1a1a'],
      featured: false,
      year: 2024,
      status: 'in-progress',
      links: { github: '#' },
      features: [
        'Tableaux de bord avec graphiques interactifs',
        'Plans d\'entraînement personnalisés par IA',
        'Suivi nutritionnel et macros',
        'Historique et statistiques de progression',
        'Défis et système de gamification',
        'Synchronisation multi-appareils',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
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
      title: 'EduPortail CDE',
      subtitle: 'Plateforme d\'Examens en Ligne',
      description: 'Plateforme web pour les élèves de Terminale CDE avec corrections d\'examens interactives et exercices pratiques.',
      longDescription: `EduPortail CDE est une plateforme Angular dédiée aux élèves de Terminale CDE au Cameroun. Elle propose des corrections d'examens officiels, des exercices interactifs, des simulations de Probatoire et un suivi de progression personnalisé. Un outil pédagogique pensé pour l'excellence académique.`,
      category: 'web',
      technologies: [
        { name: 'Angular', icon: 'pi pi-code', color: '#DD0031' },
        { name: 'Firebase', icon: 'pi pi-database', color: '#FFCA28' },
        { name: 'PrimeNG', icon: 'pi pi-prime', color: '#10B981' },
        { name: 'TypeScript', icon: 'pi pi-code', color: '#3178C6' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      gradientColors: ['#0f2027', '#203a43'],
      featured: false,
      year: 2024,
      status: 'in-progress',
      links: { demo: '#' },
      features: [
        'Corrections interactives d\'examens officiels',
        'Banque de sujets Probatoire et Bac',
        'Simulations d\'examens chronométrés',
        'Suivi de progression par compétence',
        'Forum d\'entraide entre élèves',
        'Cours vidéo intégrés',
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
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

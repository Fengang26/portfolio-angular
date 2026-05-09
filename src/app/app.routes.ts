import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

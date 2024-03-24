import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main.component';
import { BlankLayoutComponent } from './layouts/blank.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.component'),
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '404',
        loadComponent: () => import('./pages/not-found/not-found.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

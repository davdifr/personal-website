import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main.component';
import { BlankLayoutComponent } from './layouts/blank.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component'),
      },
      {
        path: 'showcase',
        loadComponent: () => import('./pages/showcase/showcase.component'),
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

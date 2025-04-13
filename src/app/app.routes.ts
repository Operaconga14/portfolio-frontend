import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Amire Joseph | Home',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Amire Joseph | Contact',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
    title: 'Amire Joseph | Portfolio',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    title: 'Amire Joseph | Projects',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
    title: 'Amire Joseph | About',
  },
];

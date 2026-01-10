import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { NotFoundPageComponent } from './pages/notFound/not-found-page';
import { DragonballComponent } from './pages/dragonball/dragonball-page';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LibroComponent } from './components/libro/libro.component';
import { AutorComponent } from './components/autor/autor.component';
import { LibrosCardsComponent } from './components/libros-cards/libros-cards.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: LibroComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'autores/:id', component: AutorComponent },
  { path: 'libros-cards', component: LibrosCardsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

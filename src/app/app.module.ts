import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { HttpClientModule } from '@angular/common/http';

import { LibrosService } from './services/libros.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LibroComponent } from './components/libro/libro.component';
import { AutorComponent } from './components/autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibrosComponent,
    AutoresComponent,
    LibroComponent,
    AutorComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

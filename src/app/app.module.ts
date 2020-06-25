import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

import { LibrosService } from './services/libros.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LibroComponent } from './components/libro/libro.component';
import { AutorComponent } from './components/autor/autor.component';
import { LibrosCardsComponent } from './components/libros-cards/libros-cards.component';
import { AddLibroComponent } from './components/libros/add-libro/add-libro.component';
import { TestComponent } from './components/test/test.component';
import { RadioComponent } from './components/radio/radio.component';
import { NgmodelComponent } from './components/ngmodel/ngmodel.component';
import { ImageComponent } from './components/image/image.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibrosComponent,
    AutoresComponent,
    LibroComponent,
    AutorComponent,
    LibrosCardsComponent,
    AddLibroComponent,
    TestComponent,
    RadioComponent,
    NgmodelComponent,
    ImageComponent,
    PrivateComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

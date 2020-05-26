import { Injectable } from '@angular/core';
import { Autor } from '../components/models/autor.model';
import { Libro } from '../components/models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autor1 = new Autor(1, 'Kafka');
  autor2 = new Autor(2, 'Homero');

  libro1 = new Libro (1, 'Metamorfosis', this.autor1);
  libro2 = new Libro (2, 'El castillo', this.autor1);
  libro3 = new Libro (3, 'Odisea', this.autor2);

  public autores: Autor[] = [
    this.autor1,
    this.autor2
  ];

  constructor() { }

  getAutores(): Autor[]{
    return this.autores;
  }
}

import { Injectable } from '@angular/core';
import { Autor } from '../components/models/autor.model';
import { Libro } from '../components/models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  autor1 = new Autor(1, 'Kafka');
  autor2 = new Autor(2, 'Homero');

  libro1 = new Libro (1, 'Metamorfosis', this.autor1);
  libro2 = new Libro (2, 'El castillo', this.autor1);
  libro3 = new Libro (3, 'Odisea', this.autor2);

  public libros: Libro[] = [
    this.libro1,
    this.libro2,
    this.libro3
  ];

  constructor() { }

  getLibros(): Libro[]{
    return this.libros;
  }

}

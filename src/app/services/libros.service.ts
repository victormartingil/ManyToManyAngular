import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LibroConAutores } from '../models/libro-con-autores';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: LibroConAutores[] = [];
  libro: LibroConAutores;

  constructor(private http: HttpClient) {
  }

  getLibros(): Observable<LibroConAutores>{
    return this.http.get<LibroConAutores>(environment.api + '/libros');
  }

  addLibro(titulo: string, idAutor: number): void{
    console.log('addLibro - Services');
    this.libro = new LibroConAutores(0, titulo, [new Autor(idAutor, null)]);
    this.http.post<LibroConAutores>(environment.api + '/libros', this.libro)
             .toPromise()
             .then(data => {
                console.log(data);
          });
  }

}

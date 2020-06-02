import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LibroConAutores } from '../models/libro-con-autores';
import { Autor } from '../models/autor';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { AutorConLibros } from '../models/autor-con-libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: LibroConAutores[] = [];
  libro: LibroConAutores;
  titulos: string[];

  constructor(private http: HttpClient) {
  }

  getLibros(): Observable<LibroConAutores>{
    return this.http.get<LibroConAutores>(environment.api + '/libros');
  }

  // Ejemplo Observable-Pipe-Map que no llega a funcionar
  getTitulos(): Observable<any> {
    return this.http.get<LibroConAutores>(environment.api + '/libros')
      .pipe( map ( data => data['autores?'].items ));
  }

  add(titulo: string, idAutor: number): Observable<any>{
    const nuevoAutor: Autor = new Autor(idAutor, null);
    return this.http.post<any>(environment.api + '/libros', new LibroConAutores(0, titulo, [nuevoAutor]));
  }

  delete(id: number): Observable<any> {
    console.log('Services - DELETE id: ' + id);
    const url = environment.api + '/libros/' + id;
    return this.http.delete(url);
  }

  edit(id: number){
    console.log('Services - EDIT');
  }

}

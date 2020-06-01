import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LibroConAutores } from '../models/libro-con-autores';
import { Autor } from '../models/autor';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

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

  add(titulo: string, idAutor: number): Observable<any>{
    console.log('Service - ADD');
    return this.http.post<any>(environment.api + '/libros', new LibroConAutores(0, titulo, [new Autor(idAutor, null)]));
  }

  handleError(arg0: string, hero: any): (err: any, caught: Observable<LibroConAutores>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
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

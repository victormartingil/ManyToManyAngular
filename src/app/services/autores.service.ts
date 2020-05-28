import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { AutorConLibros } from '../models/autor-con-libros';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autores: AutorConLibros[] = [];

  constructor(private http: HttpClient) { }

  getAutores(): Observable<AutorConLibros>{
    return this.http.get<AutorConLibros>(environment.api + '/autores');
  }

  addAutor(autor: AutorConLibros): void{
    this.http.post<AutorConLibros>(environment.api + '/autores', autor);
  }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Autor } from '../models/autor';
import { AutorConLibros } from '../models/autor-con-libros';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autores: Autor[] = [];

  constructor(private http: HttpClient) { }

  getAutores(): Observable<AutorConLibros>{
    return this.http.get<AutorConLibros>(environment.api + '/autores');
  }

  add(autor: Autor): Observable<Autor>{
    return this.http.post<Autor>(environment.api + '/autores', autor);
  }

  delete(id: number): Observable<any> {
    const url = environment.api + '/autores/' + id;
    return this.http.delete(url);
  }

  edit(id: number){
    console.log('Services - EDIT');
  }
}

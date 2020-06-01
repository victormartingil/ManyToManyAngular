import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LibroConAutores } from '../models/libro-con-autores';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: LibroConAutores[] = [];

  constructor(private http: HttpClient) {
  }

  getLibros(): Observable<LibroConAutores>{
    return this.http.get<LibroConAutores>(environment.api + '/libros');
  }

  addLibro(libro: LibroConAutores): void{
    this.http.post<LibroConAutores>(environment.api + '/libros', libro)
             .toPromise()
             .then(data => {
                console.log(data);
          });
  }

}

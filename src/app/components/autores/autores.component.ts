import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AutoresService } from '../../services/autores.service';

import { Autor } from '../../models/autor';
import { AutorConLibros } from '../../models/autor-con-libros';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<AutorConLibros>;

  autor: Autor = new Autor(0, 'Autor prueba');

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autores$ = this.autoresService.getAutores();
  }

  addAutor(){
    console.info('addAutor', this.autor);
    this.autoresService.addAutor(this.autor);
  }

}

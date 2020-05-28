import { Component, OnInit } from '@angular/core';
import { AutorConLibros } from '../../models/autor-con-libros';
import { AutoresService } from '../../services/autores.service';
import { Observable } from 'rxjs';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<AutorConLibros>;

  autor: AutorConLibros = new AutorConLibros(0, 'Autor prueba');

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autores$ = this.autoresService.getAutores();
  }

  addAutor(){
    console.info('addAutor', this.autor);
    this.autoresService.addAutor(this.autor);
  }

}

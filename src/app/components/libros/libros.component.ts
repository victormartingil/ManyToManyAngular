import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private librosService: LibrosService) {
  }

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
  }

}

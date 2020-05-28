import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { LibroConAutores } from '../../models/libro-con-autores';
import { Observable } from 'rxjs';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros$: Observable<LibroConAutores>;

  // Prueba para añadir desde local
  autorPrueba: Autor = new Autor(1, null);
  libro: LibroConAutores = new LibroConAutores(9, 'LibroPruebaOtro', [this.autorPrueba]);


  constructor(private librosService: LibrosService) {
  }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
  }

  addLibro(){
    console.log('addlibro', this.libro);
    this.librosService.addLibro(this.libro);
  }
}

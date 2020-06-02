import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map-autores',
  templateUrl: './map-autores.component.html'
})
export class MapAutoresComponent implements OnInit {

  listaAutores$: Observable<string>;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getTitulos()
      .subscribe( (data: any) => {
        this.listaAutores$ = data;
      });
  }



}

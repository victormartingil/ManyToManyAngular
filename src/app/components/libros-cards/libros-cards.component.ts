import { Component, OnInit } from '@angular/core';
import { LibroConAutores } from '../../models/libro-con-autores';
import { Observable } from 'rxjs';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros-cards',
  templateUrl: './libros-cards.component.html',
  styleUrls: ['./libros-cards.component.css']
})
export class LibrosCardsComponent implements OnInit {

  libros$: Observable<LibroConAutores>;

  constructor(private librosService: LibrosService,
              private router: Router) { }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
  }

  editarLibro(id: number){
    this.router.navigate(['/libro/', id]);
  }

}

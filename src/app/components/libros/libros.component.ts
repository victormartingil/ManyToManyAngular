import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { LibroConAutores } from '../../models/libro-con-autores';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AutorConLibros } from '../../models/autor-con-libros';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AutoresService } from '../../services/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  autor: AutorConLibros;
  titulo: string;
  idAutor: number;
  showAdd = false;

  libros$: Observable<LibroConAutores>;
  autores$: Observable<AutorConLibros>;


  form: FormGroup;

  constructor(private librosService: LibrosService,
              private autoresService: AutoresService,
              private route: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
  }

  delete(id: number){
    this.librosService.delete(id)
      .subscribe(() => {
        this.libros$ = this.librosService.getLibros();
      }, (error) => console.log(error));
  }

  edit(id: number){
    this.route.navigate(['/libro/', id]);
  }

  showAddFunction(){
    this.showAdd = !this.showAdd;
  }

  updateList(){
    this.libros$ = this.librosService.getLibros();
    this.showAddFunction();
    console.log('updateList');
  }

}

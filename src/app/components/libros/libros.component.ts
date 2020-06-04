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

  libros$: Observable<LibroConAutores>;
  autores$: Observable<AutorConLibros>;


  form: FormGroup;

  constructor(private librosService: LibrosService,
              private autoresService: AutoresService,
              private route: Router,
              private fb: FormBuilder) {
        this.crearFromulario();
  }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
    this.autores$ = this.autoresService.getAutores();
  }

  crearFromulario(){
    // Aquí podemos setear texto a nuestro formulario:
    this.form = this.fb.group({
      tituloCtrl : [''],
    });
  }

  selectAutor(event: any){
    this.idAutor = event.target.value;
  }

  add() {
    this.titulo = this.form.get('tituloCtrl').value;
    this.librosService.add(this.titulo, this.idAutor)
      .subscribe(() => {
        this.libros$ = this.librosService.getLibros();
        this.form.reset();
      }, (error) => console.log('Error: ' + error));
  }

  delete(id: number){
    this.librosService.delete(id)
      .subscribe(() => {
        this.libros$ = this.librosService.getLibros();
        this.form.reset();
      }, (error) => console.log(error));
  }

  edit(id: number){
    this.route.navigate(['/libro/', id]);
  }

  // nombreNoValido(){
  //   return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  // }

}

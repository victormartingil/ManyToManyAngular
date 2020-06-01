import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { LibroConAutores } from '../../models/libro-con-autores';
import { Observable } from 'rxjs';
import { Autor } from '../../models/autor';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros$: Observable<LibroConAutores>;
  autor: Autor;
  titulo: string;
  idAutor: number;

  form: FormGroup;

  constructor(private librosService: LibrosService,
              private fb: FormBuilder) {
        this.crearFromulario();
  }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
  }

  crearFromulario(){
    //Aquí podemos setear texto a nuestro formulario:
    this.form = this.fb.group({
      tituloCtrl : [''],
      idAutorCtrl: [''],
    });
  }

  addLibro() {
    this.titulo = this.form.get('tituloCtrl').value;
    this.idAutor = this.form.get('idAutorCtrl').value;
    this.librosService.addLibro(this.titulo, this.idAutor);
    console.log(this.form);
  }

  // nombreNoValido(){
  //   return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  // }

}

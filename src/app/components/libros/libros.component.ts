import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { LibroConAutores } from '../../models/libro-con-autores';
import { Observable } from 'rxjs';
import { Autor } from '../../models/autor';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros$: Observable<LibroConAutores>;
  autor: Autor;
  titulo: string;
  id: number;
  libro: LibroConAutores = new LibroConAutores(0, 'hola', [new Autor(1, null)]);
  form: FormGroup;

  constructor(private librosService: LibrosService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.libros$ = this.librosService.getLibros();
  }

  // cargarDatosFormulario(){
  // this.form = this.formBuilder.group({
  //   titulo: ['tituloPrueba', [Validators.required, Validators.minLength(3)]],
  //   autor: [3, Validators.required]
  // });
  // }

  addLibro() {
    this.titulo = this.form.get('titulo').value;
    this.id = this.form.get('autor').value;

    console.log(this.titulo + ' - ' + this.id);
    // this.autor = new Autor(f.controls.autor.value, null);
    // this.libro = new LibroConAutores(0, f.controls.titulo.value, [this.autor]);
    // if (f.valid){
    //   this.librosService.addLibro(this.libro);
    // }
  }

  nombreNoValido(){
    return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  }


}

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

  add() {
    this.titulo = this.form.get('tituloCtrl').value;
    this.idAutor = this.form.get('idAutorCtrl').value;
    console.log('Component - ADD');
    this.librosService.add(this.titulo, this.idAutor)
      .subscribe(() => this.libros$ = this.librosService.getLibros());
  }

  delete(id: number){
    console.log('Component - DELETE: ' + id);
    return this.librosService.delete(id)
      .subscribe(() => this.libros$ = this.librosService.getLibros());
  }

  edit(id: number){
    console.log('Component - EDIT');
  }



  // nombreNoValido(){
  //   return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  // }

}

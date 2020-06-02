import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AutoresService } from '../../services/autores.service';

import { Autor } from '../../models/autor';
import { AutorConLibros } from '../../models/autor-con-libros';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<AutorConLibros>;
  autor: Autor;
  nombre: string;

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private autoresService: AutoresService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.autores$ = this.autoresService.getAutores();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombreCtrl : [''],
    });
  }

  add(){
    this.nombre = this.form.get('nombreCtrl').value;
    this.autor = new Autor(0, this.nombre);
    this.autoresService.add(this.autor)
      .subscribe(() => this.autores$ = this.autoresService.getAutores(),
                (error) => console.log(error));

  }

  delete(id: number){
    this.autoresService.delete(id)
      .subscribe(() => this.autores$ = this.autoresService.getAutores(),
                (error) => console.log(error));
  }

  edit(id: number){
    console.log('Component - EDIT');
  }

}

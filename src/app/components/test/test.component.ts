import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  titulo: string;
  autor: string;
  autores: string[] = ['Cervantes', 'Gongora', 'Quevedo'];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get tituloNoValido(){
    return  this.form.get('tituloCtrl').invalid && this.form.get('tituloCtrl').touched;
  }

  crearFormulario(){
    // Aquí podemos setear texto a nuestro formulario:
    this.form = this.fb.group({
      tituloCtrl : ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  getTituloFromForm(){
    if (this.form.invalid){
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    } else{
      this.titulo = this.form.get('tituloCtrl').value;
    }
  }

  selectAutor(event: any){
    this.autor = event.target.value;
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Autor } from '../../../models/autor';
import { AutoresService } from '../../../services/autores.service';
import { AutorConLibros } from '../../../models/autor-con-libros';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LibrosService } from '../../../services/libros.service';
import { LibroConAutores } from '../../../models/libro-con-autores';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  idAutor: number;
  titulo: string;
  autores$: Observable<AutorConLibros>;
  libros$: Observable<LibroConAutores>;

  form: FormGroup;

  @Output() ocultarForm: EventEmitter<any>;

  constructor(private autoresService: AutoresService,
              private librosService: LibrosService,
              private fb: FormBuilder) {

                this.crearFormulario();
                this.ocultarForm = new EventEmitter();
   }

  ngOnInit(): void {
    this.autores$ = this.autoresService.getAutores();
    this.libros$ = this.librosService.getLibros();
  }

  crearFormulario(){
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
        this.form.reset();
        this.ocultarForm.emit(false);
        console.log('Add Subscribe');
      }, (error) => console.log('Error: ' + error));
  }

  // nombreNoValido(){
  //   return this.form.get('titulo').invalid && this.form.get('titulo').touched;
  // }

}

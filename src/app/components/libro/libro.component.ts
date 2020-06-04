import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroConAutores } from '../../models/libro-con-autores';
import { LibrosService } from '../../services/libros.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  id: number;
  tituloCtrl: string;
  libro: LibroConAutores;

  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private librosService: LibrosService,
              private fb: FormBuilder,
              private router: Router
              ) {

                this.crearFormulario();
                this.activatedRoute.params.subscribe( params => {
                this.id = params.id;

      });
   }

  ngOnInit(): void {
    this.librosService.getLibro(this.id)
      .subscribe( data => {
        this.libro = data;
        this.crearFormulario();
    });
  }

  crearFormulario(){
    let tituloAux = '';
    if (this.libro != null){
      tituloAux = this.libro.titulo;
    }
    this.form = this.fb.group({
      titulo: [tituloAux],
    });
  }

  edit(id: number){
    const autores$ = this.libro.getAutores();
    const libroEditado = new LibroConAutores (this.libro.id, this.form.get('titulo').value, autores$);
    this.librosService.edit(libroEditado)
      .subscribe(() => {
        this.router.navigate(['libros']);
        this.showOKDialog();
      });
  }

  getLibro(id: number){
    this.librosService.getLibro(id)
      .subscribe(data => {
        this.libro = data;
      });
  }

  showOKDialog(){
  }

  cleanForm(){
    this.form = this.fb.group({
      titulo : [''],
    });
  }
}

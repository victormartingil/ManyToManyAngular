import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor.model';
import { AutoresService } from '../../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public autores: Autor[];

  constructor(private autoresService: AutoresService) { }

  ngOnInit(): void {
    this.autores = this.autoresService.getAutores();

  }

}

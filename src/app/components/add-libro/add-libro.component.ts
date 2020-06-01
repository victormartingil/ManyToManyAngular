import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  addLibro(){
    this.librosService.addLibro();

  }

}

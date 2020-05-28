import { Libro } from './libro';
import { Autor } from './autor';

export class LibroConAutores extends Libro{

  constructor(id: number,
              titulo: string,
              private autores?: Autor[]){

    super(id, titulo);
    this.autores = autores;
  }

}

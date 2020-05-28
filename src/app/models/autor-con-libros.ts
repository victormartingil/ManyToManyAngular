import { Libro } from './libro';
import { Autor } from './autor';

export class AutorConLibros extends Autor{

  constructor(id: number,
              nombre: string,
              private libros?: Libro){
    super(id, nombre);
  }

}

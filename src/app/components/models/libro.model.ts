import { Autor } from './autor.model';

export class Libro {
  // id: number;
  // titulo: string;
  // autor: string;

  constructor(public id: number,
              public titulo: string,
              public autor: Autor
              ){
  }

}

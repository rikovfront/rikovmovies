import { MObject } from './mobject.model';

export class Movie extends MObject {

  director: string = '';
  year: number = 0;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.director = data.director;
      this.year = data.year;
    }
  }
}
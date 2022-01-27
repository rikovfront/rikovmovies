import { MObject } from './mobject.model';

export class Clip extends MObject {

  movieId: string = '';

  constructor(data?: any) {
    super(data);
    if (data) {
      this.movieId = data.movieId;
    }
  }

  get embedUrl(): string {
    return 'https://www.youtube.com/embed/' + this.youtubeId;
  }
}
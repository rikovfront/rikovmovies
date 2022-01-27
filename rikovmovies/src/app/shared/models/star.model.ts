import { MObject } from './mobject.model';

export class Star extends MObject {

  characterName: string = '';

  constructor(data?: any) {
    super(data);
  }
}
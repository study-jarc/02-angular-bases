import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 4000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 3000
    }
];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(character);
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
    //this.characters.splice(id, 1);
  }

}

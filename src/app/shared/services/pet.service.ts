import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[];

  constructor() {
    this.pets = [
      {id: 1, name: 'Hans', type: 'Dog', birthDate: '20/01/1990',
        soldDate: '20/01/1991', color: 'blue', previousOwner: 'Keld', price: 100},
      {id: 2, name: 'Hans', type: 'Dog', birthDate: '20/01/1990',
        soldDate: '20/01/1991', color: 'blue', previousOwner: 'Keld', price: 100},
      {id: 3, name: 'Hans', type: 'Dog', birthDate: '20/01/1990',
        soldDate: '20/01/1991', color: 'blue', previousOwner: 'Keld', price: 100},
      {id: 4, name: 'Hans', type: 'Dog', birthDate: '20/01/1990',
        soldDate: '20/01/1991', color: 'blue', previousOwner: 'Keld', price: 100}
    ];
  }

  getPets(): Pet[] {
    return this.pets;
  }
}

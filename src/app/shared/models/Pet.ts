import {Owner} from './Owner';

export class Pet {
  id: number;
  name: string;
  type: string;
  birthdate: Date;
  soldDate: Date;
  color: string;
  previousOwner: Owner;
  price: number;
}

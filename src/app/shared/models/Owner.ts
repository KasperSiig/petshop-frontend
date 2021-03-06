import {Pet} from './Pet';

export class Owner {
  id: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  pets?: Pet[];
}

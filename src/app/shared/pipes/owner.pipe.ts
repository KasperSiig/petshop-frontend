import { Pipe, PipeTransform } from '@angular/core';
import {Owner} from '../models/Owner';

@Pipe({
  name: 'owner'
})
export class OwnerPipe implements PipeTransform {

  transform(value: Owner, args?: any): any {
    return value.firstName + ' ' + value.lastName;
  }

}

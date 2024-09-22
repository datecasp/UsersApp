import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../_interfaces/User';

@Pipe({
  name: 'userFilter',
  standalone: true,
})
export class UserFilterPipe implements PipeTransform {
  transform(value: User[], ...filter: string[]): User[] {
    if (value) {
      if (filter[0] !== '')
        return value.filter((user) => user.Nombre.includes(filter[0]));
      else return value;
    }
    return [];
  }
}

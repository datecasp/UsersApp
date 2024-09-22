import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../_interfaces/User';
import { UserDTO } from '../_interfaces/UserDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UserDTO[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((usersAPI) => 
          usersAPI.map((user) => {
            const userFront: User = {
              Id: user.id,
              Nombre: user.name,
              CorreoElectronico: user.email,
              Telefono: user.phone,
            };
            return userFront;
          })
        )
      );
  }
}

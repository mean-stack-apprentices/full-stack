import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 users$: Observable<User[]>= new Observable((Observer) => {
  Observer.next([]);
});

  constructor(private api:ApiService) {

  }

  getUsers(){
    this.users$ = this.api.get<User[]>('users')
  }

  addUser(value: string){
    const user =new User();
    user.name = value;
    user.email = value;
   return this.api.post<User[], User> ('create-user', user);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$: Observable<User[]> = new Observable((Observer) => {
    Observer.next([]);
  });
  constructor(private apiService: ApiService) {

   }
   getUsers() {
    this.users$ = this.apiService.get<User[]>('users')
   }
  //  addUser() {
  //   this.users$ = this.apiService.post<User[], User>
  //   ('users', new User(0, '', ''))
  // }
}

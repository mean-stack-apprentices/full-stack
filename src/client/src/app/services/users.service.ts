
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: Observable<User[]> = new Observable((Observer) => {
    Observer.next([])
  });
  constructor(private apiService: ApiService) {
    this.getUsers();
   }

  getUsers() {
   this.users$= this.apiService.get<User[]>('users')
  }

 
}
 

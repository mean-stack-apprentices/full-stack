import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$: Observable<User[]> = new Observable(observer => {
    observer.next([]);
  });

  constructor(private api: ApiService) { }

  getUsers(){
    this.users$ = this.api.get<User[]>('users')
  }

  addUser(name:string, email: string){
    const user = new User();
    user.name = name;
    user.email = email;
    return this.api.post<User[], User>('create-user', user);
  }
}

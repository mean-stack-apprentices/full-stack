import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  updatedUserId = '';
  constructor(private api: ApiService) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map(res => res.data));
  }
  postUsers(user: User) {
    return this.updatedUserId ?
      this.api.put<User>('update-user/' + this.updatedUserId, user) :
      this.api.post<User>('create-user', user);
  }
  deleteUser(id: string) {
    return this.api.delete("delete-user", id);
  }
  updateUser(id: string,) {
    this.updatedUserId = this.updatedUserId === id ? '' : id;
  }
}

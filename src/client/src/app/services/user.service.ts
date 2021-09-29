import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  selectedUserId = '';

  constructor(private api: ApiService) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map(res => res.data));
  }
  postUsers(user: User, selectedUser?: User) {
    if(selectedUser) {
      console.log('trying to UPDATE user.......');
      return this.api.put<User>('update-user/' + selectedUser._id, user);
    }
    else
      return this.api.post<User>('create-user', user);
    // return this.selectedUserId ?
    // this.api.put<User>('update-user/' + this.selectedUserId, user) :
    // this.api.post<User>('create-user', user);
  }
  updateUser(user: User) {
      return this.api.put<User>('update-user/' + user._id, user);
  }

  deleteUser(id: string) {
    return this.api.delete<User>('delete-user/' + id);
  }

  selectUser(id: string) {
    this.selectedUserId = id
;  }
}

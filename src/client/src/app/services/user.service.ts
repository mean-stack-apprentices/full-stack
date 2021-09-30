import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUserId = '';

  constructor(private api: ApiService) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map((res) => res.data));
  }
  createUser(user: User) {
    return this.api
      .post<{ data: User }>('create-user', user)
      .pipe(map((res) => res.data));
  }
  updateUser(user: User) {
    return this.api.put<{ data: User }>('update-user/' + user._id, user).pipe(
      map((res) => {
        return {
          id: `${res.data._id}`,
          changes: res.data,
        };
      })
    );
  }

  deleteUser(user: User) {
    return this.api
      .delete<{ data: User }>('delete-user/' + user._id)
      .pipe(map((res) => res.data));
  }

  selectUser(id: string) {
    this.selectedUserId = id;
  }
}

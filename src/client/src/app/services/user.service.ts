import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';
import { UpdatedUserObj } from '../models/updated-user-obj';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: ApiService) {}

  getUsers() {
    return this.api.get<{ data: User[] }>('users').pipe(map(res => res.data));
  }
  postUsers(user: User) {
    return this.api.post<User>('create-user', user);
  }
  updateById(updatedName: UpdatedUserObj, ) {
    return this.api.put<string>('update-user', updatedName)
  }
  deleteUser(id: any) {
    return this.api.delete<any>('delete-user/' + id);
  }
}

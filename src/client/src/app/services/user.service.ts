import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  getUsers() {
    return this.api.get<User[]>('users')
  }
}

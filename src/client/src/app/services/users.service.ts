import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
// import { User } from '../schemas/user';
@Injectable({
  providedIn: 'root'
})
// export class UsersService {

// users$: Observable<User[]> = new Observable((observer) => {
//   observer.next([])
// });

  constructor(private apiService: ApiService) { }

getUsers() {
  this.users$ = this.apiService.get<User[]>('users')
}

}

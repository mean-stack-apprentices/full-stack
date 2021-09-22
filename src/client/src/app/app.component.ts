import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  users$! : Observable<User[]>;

  constructor(private api: ApiService) 
  {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.get<User[]>('users').subscribe((users) => {
      this.users$ = of(users) ;
      console.log(users);
    });
  }

  postUser() {

  }
}

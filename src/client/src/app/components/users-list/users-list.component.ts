import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>
  constructor(private userService: UserService) {
    this.users$ = this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers() {
    return this.userService.getUsers()
  }

  deleteUser(id: any, name: string) {
    this.userService.deleteUser(id).subscribe();
    console.log(`user '${name}' deleted successfully`);
  }

  selectUser(id: any) {
    this.userService.selectUser(id);
  } 

  checkSelected(id: any) {
    return this.userService.selectedUserId == id? 'green' : 'black'
  }

}

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
  updatedName?:string
  constructor(private userService: UserService) {
    this.users$ = this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers() {
    return this.userService.getUsers()
  }
  updateUsers(id: any, name:string) {
    return this.userService.updateById({_id: id, updatedName: name}).subscribe()
  }
  deleteUser(id: any) {
    return this.userService.deleteUser(id).subscribe()
  }
}

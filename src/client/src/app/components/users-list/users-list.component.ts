import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import { loadUsers, selectUserAction } from 'src/app/store/actions/user/user.actions';
import { usersSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>
  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    ) {
    this.users$ = this.store.select(usersSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }


  deleteUser(id: any, name: string) {
    this.userService.deleteUser(id).subscribe();
    console.log(`user '${name}' deleted successfully`);
  }

  selectUser(user: User) {
    this.store.dispatch(selectUserAction({data: user}))
  }

  checkSelected(id: any) {
    return this.userService.selectedUserId == id? 'green' : 'black'
  }

}

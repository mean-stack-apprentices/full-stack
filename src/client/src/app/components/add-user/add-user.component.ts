import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
//   addUsers(input: HTMLInputElement) {
//   this.usersService.addUsers(input.value).subscribe()
// }
}

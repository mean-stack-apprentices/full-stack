import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name!: string;
  email!: string;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.addUser(this.name, this.email).subscribe()
  }

}

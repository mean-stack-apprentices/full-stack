import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import { selectedUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit, OnChanges {
  addUser: FormGroup;
  @Input() selectedUser: User | null = null;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.addUser = this.fb.group({
      name: ['',Validators.required],
      username: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
    })

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('simple changes', changes);
    if (changes?.selectedUser?.currentValue) {
      const user = changes?.selectedUser?.currentValue;
      this.addUser.get('name')?.setValue(user.name);
      this.addUser.get('username')?.setValue(user.email);
      this.addUser.updateValueAndValidity();

    }
  }


  postUser() {
    console.log(this.addUser.value, 'trying to post user')
    this.userService.postUsers(this.addUser.value).subscribe();
    console.log(this.addUser.value , 'is successfully added');
    this.addUser.reset();
  }
}

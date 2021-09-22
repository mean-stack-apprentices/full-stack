import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  addUser: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.addUser = this.fb.group({
      name: ['',Validators.required],
      username: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
    })
  }

  ngOnInit(): void {
  }

}

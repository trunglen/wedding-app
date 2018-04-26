import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../../xmodel/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  form = new FormGroup({})
  constructor(
    private activedRoute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.initForm(null)
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(res => {
      console.log(res)
      this.userService.getUser(res.id).subscribe(user => {
        this.initForm(user)
      })
    })
  }

  initForm(user: User) {
    this.form = this.fb.group({
      'name': new FormControl(user ? user.name : ''),
      'phone': new FormControl(user ? user.phone : ''),
      'password': new FormControl(user ? user.password : ''),
      'information': this.fb.group({
        'sex': new FormControl(user ? user.information.sex + '' : 'true'),
        'weight': new FormControl(user ? user.information.weight : 60),
        'height': new FormControl(user ? user.information.height : 1.7),
        'birthYear': new FormControl(user ? user.information.birth_year : 1990),
      }),
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService, User } from '../../xmodel/user.service';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  users$: Observable<User[]>
  user: User
  form: FormGroup
  constructor(
    public userService: UserService,
    private notificationService: ToastNotificationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers('student')
    this.form = this.fb.group({
      'name': new FormControl(),
      'phone': new FormControl(),
      'password': new FormControl('123456'),
      'information': this.fb.group({
        'sex': new FormControl('true'),
        'weight': new FormControl(60),
        'height': new FormControl(1.70),
      }),
    })
  }

  onCreateStudent() {
    const value = this.form.value
    value.role = 'student'
    value.password = '123456'
    value.information.sex = value.information.sex == 'true'
    this.userService.createUser(value).subscribe(res => {
      this.notificationService.success('Tạo sinh viên thành công')
    })
  }

  onReset() {
    this.form.reset()
  }
}

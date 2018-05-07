import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastNotificationService } from '../../../../x/http/toast-notification.service';
import { UserService, User } from '../../../xmodel/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionFactory } from '../../../../x/storage.utils';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  birthYears = [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]
  restaurant$: Observable<User[]>;
  form: FormGroup
  userInfo = SessionFactory.getInfo()
  constructor(
    private notificationService: ToastNotificationService,
    private fb: FormBuilder,
    public userService: UserService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const restaurant_id = this.userInfo.role === 'super-admin' ? '' : (this.userInfo.role === 'supervisor' ? this.userInfo.id : this.userInfo.restaurant_id)
    this.form = this.fb.group({
      'name': new FormControl(),
      'phone': new FormControl(),
      'password': new FormControl('123456'),
      'restaurant_id': new FormControl(restaurant_id),
      'information': this.fb.group({
        'sex': new FormControl('true'),
        'weight': new FormControl(60),
        'height': new FormControl(1.70),
        'birthYear': new FormControl(1997),
      }),
    });
    this.restaurant$ = this.userService.getUsersByRole('supervisor')
  }

  onCreateStudent() {
    const value = this.form.value
    value.role = 'student'
    value.password = '123456'
    value.information.sex = (value.information.sex == 'true')
    this.userService.createUser(value).subscribe(res => {
      this.notificationService.success('Tạo sinh viên thành công')
      this.router.navigate(["../"], { relativeTo: this.activedRoute })
    })
  }

  onReset() {
    this.form.reset()
  }
}

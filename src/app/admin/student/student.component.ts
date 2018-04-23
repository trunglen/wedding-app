import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService, User } from '../../xmodel/user.service';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  users$: Observable<User[]>;  
  constructor(
    public userService: UserService,
    private notificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers('student')
  }

  onCreateStudent(f: NgForm) {
    const value = f.value
    value.role = 'student'
    this.userService.createUser(value).subscribe(res => {
      this.notificationService.success('Tạo sinh viên thành công')
    })
  }
}

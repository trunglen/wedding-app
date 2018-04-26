import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService, User } from '../../xmodel/user.service';
import { Observable } from 'rxjs/Observable';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  users$: Observable<User[]>
  constructor(
    public userService: UserService,
    private notificationService: ToastNotificationService

  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers('student')
  }

  onEdit() { }

  onDelete(id: string) {
    this.notificationService.confirm("Bạn có chắc muốn xóa").subscribe(yes => {
      this.userService.deleteUser(id).subscribe(res=>{
        this.notificationService.success('Đã xóa thành công')
      })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../xmodel/user.service';
import { NgForm } from '@angular/forms';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(
    public userService: UserService,
    private notifycationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers('manager')
  }

  onCreateManager(f: NgForm) {
    const value = f.value
    value.role = 'manager'
    this.userService.createUser(value).subscribe(res => {
      this.notifycationService.success('Tạo người quản lí thành công')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotificationService } from '../../../../x/http/toast-notification.service';
import { NgForm } from '@angular/forms';
import { UserService, User } from '../../../xmodel/user.service';
import { Observable } from 'rxjs/Observable';
import { SessionFactory } from '../../../../x/storage.utils';

@Component({
  selector: 'app-manager-create',
  templateUrl: './manager-create.component.html',
  styleUrls: ['./manager-create.component.css']
})
export class ManagerCreateComponent implements OnInit {

  restaurant$: Observable<User[]>;
  restaurant_id = ''
  userInfo = SessionFactory.getInfo()
  constructor(
    private notifycationService: ToastNotificationService,
    private router: Router,
    public userService: UserService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurant$ = this.userService.getUsersByRole('supervisor')
    const userInfo = SessionFactory.getInfo()
    this.restaurant_id = userInfo.role === 'super-admin' ? '' : (userInfo.role === 'supervisor' ? userInfo.id : userInfo.restaurant_id)
  }

  onCreateManager(f: NgForm) {
    const value = f.value
    value.role = 'manager'
    value.restaurant_id = (value.restaurant_id || this.restaurant_id)
    this.userService.createUser(value).subscribe(res => {
      this.notifycationService.success('Tạo người quản lí thành công')
      this.router.navigate(['../'], { relativeTo: this.activedRoute })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../xmodel/user.service';
import { NgForm } from '@angular/forms';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(
    public userService: UserService,
    private notifycationService: ToastNotificationService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private notificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getManagers()
  }

  onCreateManager(f: NgForm) {
    const value = f.value
    value.role = 'manager'
    this.userService.createUser(value).subscribe(res => {
      this.notifycationService.success('Tạo người quản lí thành công')
    })
  }

  onEdit(u: User) {
    this.router.navigate([`update/${u.id}`], { relativeTo: this.activedRoute, queryParams: u })
  }

  onDelete(id: string) {
    this.notificationService.confirm("Bạn có chắc muốn xóa").subscribe(yes => {
      this.userService.deleteUser(id).subscribe(res => {
        this.notificationService.success('Đã xóa thành công')
      })
    })
  }

  onNew() {
    this.router.navigate(['admin/manager/create'])
  }
}

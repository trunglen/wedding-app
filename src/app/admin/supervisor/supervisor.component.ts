import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../xmodel/user.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(
    public userService: UserService,
    private router: Router,
    private notificationService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers("supervisor")
  }

  onNew() {
    this.router.navigate(['admin/supervisor/create'])
  }

  onEdit(u:User) {
    this.router.navigate([`admin/supervisor/edit/${u.id}`], {queryParams:u})
  }
  
  onDelete(id: string) {
    this.notificationService.confirm("Bạn có chắc muốn xóa").subscribe(yes => {
      this.userService.deleteUser(id).subscribe(res=>{
        this.notificationService.success('Đã xóa thành công')
      })
    })
  }
}

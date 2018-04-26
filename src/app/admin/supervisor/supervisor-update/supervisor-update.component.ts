import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserService } from '../../../xmodel/user.service';
import { ToastNotificationService } from '../../../../x/http/toast-notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supervisor-update',
  templateUrl: './supervisor-update.component.html',
  styleUrls: ['./supervisor-update.component.css']
})
export class SupervisorUpdateComponent implements OnInit {

  user: User
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private userService: UserService,
    private notifyService: ToastNotificationService
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(res => { this.user = <User>res })
  }

  onSave(f: NgForm) {
    const value = f.value
    value.id = this.user.id
    this.userService.updateSupervisor(f.value).subscribe(res => {
      this.notifyService.success('Cập nhật mới thành công')
      this.router.navigate(["../../"], { relativeTo: this.activedRoute })
    })
  }
}

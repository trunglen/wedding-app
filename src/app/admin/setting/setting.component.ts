import { Component, OnInit } from '@angular/core';
import { UserService } from '../../xmodel/user.service';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { SessionFactory } from '../../../x/storage.utils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [UserService]
})
export class SettingComponent implements OnInit {

  constructor(
    private userService: UserService,
    private notificationService: ToastNotificationService,
  ) { }

  ngOnInit() {
  }

  onChangeInfo(f: NgForm) {
    const value = f.value
    value.user_id = SessionFactory.getInfo().user_info.id
    console.log(value)
    this.userService.changePassword(value).subscribe(res => {
      this.notificationService.success('Cập nhật mật khẩu thành công')
    })
  }
}

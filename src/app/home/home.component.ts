import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../x/storage.utils';
import { UserService } from '../xmodel/user.service';
import { Wedding } from '../xmodel/wedding.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wedding-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    UserService
  ]
})
export class HomeComponent implements OnInit {

  restaurantName: ''
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit() {
    const restaurantName = SessionFactory.getItem('access_token') ? SessionFactory.getItem('access_token').user_info.restaurant_name : null
    const userInfo = SessionFactory.getInfo()
    if (userInfo.role === 'manager') {
      // setInterval(() => {
      //   this.userService.getWarningMissingWedding(userInfo.restaurant_id).subscribe(res => {
      //     const weddings = <Wedding[]>res
      //     weddings.forEach((k, v) => {
      //       const notification = new Notification('Đám thiếu người', {
      //         body: new Wedding(k).getAddress(),
      //         icon: 'http://i.imgur.com/0V9qBZh.png',
      //       })
      //       notification.onclick = () => {
      //         this.router.navigate(['/admin/wedding/detail/' + k.id])
      //       }
      //     })
      //   })
      // }, 5000)
    }
    this.restaurantName = restaurantName ? restaurantName : 'Quản lí bê tráp nhà hàng'
  }

}

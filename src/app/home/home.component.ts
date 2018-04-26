import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../x/storage.utils';

@Component({
  selector: 'wedding-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantName: ''
  constructor() { }
  ngOnInit() {
    const restaurantName = SessionFactory.getItem('access_token') ? SessionFactory.getItem('access_token').user_info.restaurant_name : null
    this.restaurantName = restaurantName?restaurantName:'Quản lí bê tráp nhà hàng'
  }

}

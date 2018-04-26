import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../../x/storage.utils';

@Component({
  selector: 'wedding-core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role = ''

  constructor() { }
  ngOnInit() {
    this.role = SessionFactory.getItem('role') ? SessionFactory.getItem('access_token').user_info.role : 'null'
  }

}

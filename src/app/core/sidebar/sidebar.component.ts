import { Component, OnInit } from '@angular/core';
import { SessionFactory } from '../../../x/storage.utils';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wedding-core-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role = ''

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.role = SessionFactory.getItem('role') ? SessionFactory.getItem('access_token').user_info.role : 'null'
  }

  onLogout() {
    sessionStorage.clear()
    this.router.navigate(['/auth/signin'])
  }
}

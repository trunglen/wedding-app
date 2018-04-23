import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../xmodel/user.service';

@Component({
  selector: 'app-supervisor-update',
  templateUrl: './supervisor-update.component.html',
  styleUrls: ['./supervisor-update.component.css']
})
export class SupervisorUpdateComponent implements OnInit {

  user: User
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe(res => this.user = <User>res)
  }

}

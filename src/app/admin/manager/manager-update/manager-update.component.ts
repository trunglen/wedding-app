import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User, UserService } from '../../../xmodel/user.service';

@Component({
  selector: 'app-manager-update',
  templateUrl: './manager-update.component.html',
  styleUrls: ['./manager-update.component.css']
})
export class ManagerUpdateComponent implements OnInit {
  restaurant$: Observable<User[]>;
  manager: User = <User>{}
  constructor(
    private activedRoute: ActivatedRoute,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.restaurant$ = this.userService.getUsersByRole('supervisor')
    this.activedRoute.queryParams.subscribe(query => {
      this.manager = <User>query
    })
  }

}

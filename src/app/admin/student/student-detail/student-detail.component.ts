import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { UserService, User } from '../../../xmodel/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  staticURL = environment.staticURL
  user = <User>{information:{}}
  constructor(
    private userService: UserService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(param => {
      this.userService.getUser(param.id).subscribe(res => this.user = res)
    })
  }

}

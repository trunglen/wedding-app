import { Component, OnInit } from '@angular/core';
import { UserService } from '../../xmodel/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}

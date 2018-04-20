import { Component, OnInit } from '@angular/core';
import { UserService } from '../../xmodel/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  onCreateSupervisor(f: NgForm) {
    console.log(f.value)
    const value = f.value
    value.role = 'supervisor'
    this.userService.createUser(value)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../xmodel/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-create',
  templateUrl: './supervisor-create.component.html',
  styleUrls: ['./supervisor-create.component.css']
})
export class SupervisorCreateComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onCreateSupervisor(f: NgForm) {
    const value = f.value
    value.role = 'supervisor'
    this.userService.createUser(value).subscribe(res => {
      this.router.navigate(['/admin/supervisor'])
    })
  }

}

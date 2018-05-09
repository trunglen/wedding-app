import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, UserService } from '../../../xmodel/user.service';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  students$ : Observable<User[]>
  p = 1
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.students$ = this.userService.getUsers('student')
  }

}

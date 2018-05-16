import { Component, OnInit } from '@angular/core';
import { ReportService, RestaurantReport, GeneralReport } from '../../../xmodel/report.service';
import { Observable } from 'rxjs/Observable';
import { User, UserService } from '../../../xmodel/user.service';
import { ListComponent } from '../../../shared/list.component';

@Component({
  selector: 'app-system-report',
  templateUrl: './system-report.component.html',
  styleUrls: ['./system-report.component.css']
})
export class SystemReportComponent extends ListComponent implements OnInit {
  rreports = <RestaurantReport[]>[]
  gReport$ = <GeneralReport>{}
  sumR: number
  percent = 0.15
  students$: Observable<User[]>
  p = 1
  constructor(
    private reportService: ReportService,
    private userService: UserService
  ) { super() }

  ngOnInit() {
    this.reportService.getGeneralReport().subscribe(res => this.gReport$ = res)
    this.students$ = this.userService.getUsers('student')
    this.reportService.getRestaurantReport().subscribe(res => {
      this.rreports = res
      this.sumR = this.rreports.map(r => r.total).reduce((sum, current) => sum + current)
    })
  }

}

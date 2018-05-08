import { Component, OnInit } from '@angular/core';
import { ReportService, RestaurantReport, WeddingReport } from '../../../xmodel/report.service';
import { Observable } from 'rxjs/Observable';
import { UserService , User} from '../../../xmodel/user.service';
import { Student } from '../../../xmodel/student.service';

@Component({
  selector: 'app-wedding-report',
  templateUrl: './wedding-report.component.html',
  styleUrls: ['./wedding-report.component.css']
})
export class WeddingReportComponent implements OnInit {

  wreports = <WeddingReport[]>[]
  sumW: number
  p = 1
  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.reportService.getWeddingReport().subscribe(res => {
      this.wreports = res
      this.sumW = this.wreports.map(r => r.total).reduce((sum, current) => sum + current)
    })
  }

}

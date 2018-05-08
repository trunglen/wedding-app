import { Component, OnInit } from '@angular/core';
import { ReportService, RestaurantReport } from '../../../xmodel/report.service';

@Component({
  selector: 'app-system-report',
  templateUrl: './system-report.component.html',
  styleUrls: ['./system-report.component.css']
})
export class SystemReportComponent implements OnInit {
  rreports = <RestaurantReport[]>[]
  sumR: number
  percent = 0.15
  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.reportService.getRestaurantReport().subscribe(res => {
      this.rreports = res
      this.sumR = this.rreports.map(r => r.total).reduce((sum, current) => sum + current)
    })
  }

}

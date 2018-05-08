import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { WeddingReportComponent } from './wedding-report/wedding-report.component';
import { ReportService } from '../../xmodel/report.service';
import { SharedModule } from '../../shared/shared.module';
import { StudentReportComponent } from './student-report/student-report.component';
import { ReportComponent } from './report.component';
import { SystemReportComponent } from './system-report/system-report.component';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ],
  declarations: [WeddingReportComponent, StudentReportComponent, ReportComponent, SystemReportComponent],
  providers:[
    ReportService
  ]
})
export class ReportModule { }

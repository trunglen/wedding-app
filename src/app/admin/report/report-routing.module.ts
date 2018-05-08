import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingReportComponent } from './wedding-report/wedding-report.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { SystemReportComponent } from './system-report/system-report.component';

const routes: Routes = [
  { path: 'system', component: SystemReportComponent },
  { path: 'student', component: StudentReportComponent },
  { path: 'wedding', component: WeddingReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

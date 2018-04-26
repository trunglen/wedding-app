import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { StudentComponent } from './student/student.component';
import { UserService } from '../xmodel/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupervisorCreateComponent } from './supervisor/supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor/supervisor-update/supervisor-update.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CalendarModule } from 'primeng/calendar';
import { WeddingService } from '../xmodel/wedding.service';
import { SharedModule } from '../shared/shared.module';
import { WeddingDetailComponent } from './wedding/wedding-detail/wedding-detail.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [],
  providers: [
    UserService,
    WeddingService,
  ]
})
export class AdminModule { }

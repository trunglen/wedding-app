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
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  declarations: [SupervisorComponent, ManagerComponent, StudentComponent, SupervisorCreateComponent, SupervisorUpdateComponent, WeddingComponent],
  providers: [
    UserService,
    WeddingService
  ]
})
export class AdminModule { }

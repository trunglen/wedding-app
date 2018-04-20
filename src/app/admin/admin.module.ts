import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { StudentComponent } from './student/student.component';
import { UserService } from '../xmodel/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [SupervisorComponent, ManagerComponent, StudentComponent],
  providers: [
    UserService
  ]
})
export class AdminModule { }

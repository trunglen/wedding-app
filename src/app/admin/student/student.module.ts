import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { UserService } from '../../xmodel/user.service';
import { StudentComponent } from './student.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
  ],
  declarations: [
    StudentComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  providers: [
  ]
})
export class StudentModule { }

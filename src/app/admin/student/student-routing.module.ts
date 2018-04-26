import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { UserService } from '../../xmodel/user.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  {
    path: 'detail/:id', component: StudentDetailComponent
  },
  {
    path: 'update/:id', component: StudentUpdateComponent
  },
  {
    path: 'create', component: StudentCreateComponent
  },
  {
    path: '', component: StudentComponent, resolve: {
      userService: UserService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

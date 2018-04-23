import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { UserService } from '../xmodel/user.service';
import { SupervisorCreateComponent } from './supervisor/supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor/supervisor-update/supervisor-update.component';
import { StudentComponent } from './student/student.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {
    path: 'supervisor/create', component: SupervisorCreateComponent
  },
  {
    path: 'supervisor/edit/:id', component: SupervisorUpdateComponent
  },
  {
    path: 'supervisor', component: SupervisorComponent, resolve: {
      userService: UserService
    }
  },
  {
    path: 'student', component: StudentComponent, resolve: {
      userService: UserService
    }
  },
  {
    path: 'wedding', component: WeddingComponent
  },
  {
    path: 'manager', component: ManagerComponent, resolve: {
      userService: UserService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

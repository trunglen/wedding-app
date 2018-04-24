import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { UserService } from '../xmodel/user.service';
import { SupervisorCreateComponent } from './supervisor/supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor/supervisor-update/supervisor-update.component';
import { StudentComponent } from './student/student.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingService } from '../xmodel/wedding.service';
import { WeddingDetailComponent } from './wedding/wedding-detail/wedding-detail.component';
import { ManagerGuardService } from '../auth/auth-guard.service';

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
    }, canActivate: [ManagerGuardService]
  },
  {
    path: 'student', component: StudentComponent, resolve: {
      userService: UserService
    }
  },
  {
    path: 'wedding/detail/:id', component: WeddingDetailComponent,
  },
  {
    path: 'wedding', component: WeddingComponent, resolve: {
      weddingService: WeddingService
    }
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

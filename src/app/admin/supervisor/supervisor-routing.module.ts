import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorCreateComponent } from './supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor-update/supervisor-update.component';
import { UserService } from '../../xmodel/user.service';
import { SupervisorComponent } from './supervisor.component';
import { SuperAdminGuardService } from '../../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'create', component: SupervisorCreateComponent
  },
  {
    path: 'edit/:id', component: SupervisorUpdateComponent
  },
  {
    path: '', component: SupervisorComponent, resolve: {
      userService: UserService
    }, canActivateChild: [SuperAdminGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }

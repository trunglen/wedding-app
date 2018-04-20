import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { UserService } from '../xmodel/user.service';

const routes: Routes = [
  { path: 'supervisor', component: SupervisorComponent },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { UserService } from '../../xmodel/user.service';
import { ManagerCreateComponent } from './manager-create/manager-create.component';
import { ManagerUpdateComponent } from './manager-update/manager-update.component';

const routes: Routes = [
  {
    path: 'create', component: ManagerCreateComponent,
  },
  {
    path: 'update/:id', component: ManagerUpdateComponent,
  },
  {
    path: '', component: ManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

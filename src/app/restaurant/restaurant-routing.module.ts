import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ManagerComponent } from './mamage/manager/manager.component';
import { UserService } from '../xmodel/user.service';

const routes: Routes = [
  { path: 'supervisor', component: AccountComponent },
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
export class RestaurantRoutingModule { }

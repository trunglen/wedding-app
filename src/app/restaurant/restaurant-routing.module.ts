import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ManagerComponent } from './mamage/manager/manager.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'manage/create-manager', component: ManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { AccountComponent } from './account/account.component';
import { ManagerComponent } from './mamage/manager/manager.component';
import { ContractComponent } from './mamage/contract/contract.component';
import { UserService } from '../xmodel/user.service';

@NgModule({
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ],
  declarations: [AccountComponent, ManagerComponent, ContractComponent],
  providers: [
    UserService
  ]
})
export class RestaurantModule { }

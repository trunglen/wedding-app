import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { SharedModule } from '../../shared/shared.module';
import { ManagerCreateComponent } from './manager-create/manager-create.component';
import { ManagerUpdateComponent } from './manager-update/manager-update.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ],
  declarations: [
    ManagerComponent,
    ManagerCreateComponent,
    ManagerUpdateComponent
  ]
})
export class ManagerModule { }

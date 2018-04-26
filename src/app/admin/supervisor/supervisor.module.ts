import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { SupervisorCreateComponent } from './supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor-update/supervisor-update.component';
import { SupervisorComponent } from './supervisor.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModule
  ],
  declarations: [
    SupervisorCreateComponent,
    SupervisorUpdateComponent,
    SupervisorComponent
  ]
})
export class SupervisorModule { }

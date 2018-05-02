import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserService } from '../xmodel/user.service';
import { WeddingService } from '../xmodel/wedding.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [],
  providers: [
    UserService,
    WeddingService,
  ]
})
export class AdminModule { }

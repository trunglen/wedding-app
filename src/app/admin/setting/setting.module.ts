import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ],
  declarations: [
    SettingComponent
  ]
})
export class SettingModule { }

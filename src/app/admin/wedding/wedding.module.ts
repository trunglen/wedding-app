import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding.component';
import { WeddingDetailComponent } from './wedding-detail/wedding-detail.component';
import { WeddingService } from '../../xmodel/wedding.service';
import { SharedModule } from '../../shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { WeddingCreateComponent } from './wedding-create/wedding-create.component';
import { WeddingUpdateComponent } from './wedding-update/wedding-update.component';

@NgModule({
  imports: [
    CommonModule,
    WeddingRoutingModule,
    SharedModule,
    CalendarModule
  ],
  declarations: [
    WeddingComponent,
    WeddingDetailComponent,
    WeddingCreateComponent,
    WeddingUpdateComponent
  ],
  providers: [
  ]
})
export class WeddingModule { }

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
import { WeddingFilterPipe } from './wedding-filter.pipe';
import { WeddingHistoryComponent } from './wedding-history/wedding-history.component';

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
    WeddingUpdateComponent,
    WeddingFilterPipe,
    WeddingHistoryComponent
  ],
  providers: [
  ]
})
export class WeddingModule { }

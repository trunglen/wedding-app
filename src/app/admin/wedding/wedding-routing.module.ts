import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingDetailComponent } from './wedding-detail/wedding-detail.component';
import { WeddingComponent } from './wedding.component';
import { WeddingService } from '../../xmodel/wedding.service';
import { WeddingCreateComponent } from './wedding-create/wedding-create.component';
import { WeddingUpdateComponent } from './wedding-update/wedding-update.component';
import { WeddingHistoryComponent } from './wedding-history/wedding-history.component';

const routes: Routes = [
  {
    path: 'detail/:id', component: WeddingDetailComponent,
  },
  {
    path: 'create', component: WeddingCreateComponent,
  },
  {
    path: 'history', component: WeddingHistoryComponent,
  },
  {
    path: 'edit/:id', component: WeddingUpdateComponent,
  },
  {
    path: '', component: WeddingComponent, resolve: {
      weddingService: WeddingService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { HttpService, HttpErrorService } from '../../x/http/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SupervisorLoadService, SuperAdminLoadService, ManagerLoadService, ManagerGuardService } from '../auth/auth-guard.service';
import { NgxModelModule } from 'ngx-model';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxModelModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsideMenuComponent,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AsideMenuComponent],
  providers: [
    HttpService,
    SuperAdminLoadService,
    SupervisorLoadService,
    ManagerLoadService,
    ManagerGuardService
  ]
})
export class CoreModule { }

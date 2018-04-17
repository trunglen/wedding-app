import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { HttpService } from '../../x/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastNotificationService } from '../../x/http/toast-notification.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsideMenuComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, AsideMenuComponent],
  providers: [
    HttpService,
    ToastNotificationService
  ]
})
export class CoreModule { }

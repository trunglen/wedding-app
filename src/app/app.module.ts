import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { ToastDefaults, SnotifyModule, SnotifyService } from 'ng-snotify';
import { HttpErrorService, AuthHttpService } from '../x/http/http.service';
import { ToastNotificationService } from '../x/http/toast-notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SnotifyModule,
    BrowserModule,
    BrowserAnimationsModule    
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpService,
      multi: true
    },
    ToastNotificationService,
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

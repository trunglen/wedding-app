import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpEvent, HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ToastNotificationService } from './toast-notification.service';
import { SpinnerService } from '../../app/core/spinner.service';
import { SnotifyService } from 'ng-snotify';
import { SessionFactory } from '../storage.utils';

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient,
    ) { }

    Get<T>(url: string, params?: any) {
        // this.spinnerService.show();
        return this.http.get<T>(url, { params: params }).map(res => {
            return res['data'];
        }).finally(() => {
            // this.spinnerService.hide() 
        });
    }

    Post<T>(url: string, body: any) {
        // this.spinnerService.show(); 
        return this.http.post(url, body).map(res => {
            return res['data'];
        }).finally(() => {
            // this.spinnerService.hide() 
        });
    }
}

@Injectable()
export class AuthHttpService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${SessionFactory.getItem('access_token').token}`
            },
        });
        return next.handle(req);
    }
}


@Injectable()
export class HttpErrorService implements HttpInterceptor {
    constructor(
        private toastService: ToastNotificationService,
        private notifyService: SnotifyService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.error('An error accured', err.error.message)
            } else {
                console.log(err.error['error'])
                this.notifyService.error(err.error['error'])
                return null
            }
            return Observable.throw(err);
        });
    }
}

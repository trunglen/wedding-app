import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionFactory } from '../../x/storage.utils';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (!sessionStorage.getItem('access_token')) {
            this.router.navigate(["/auth/signin"]);
            return false;
        }
        return true;
    }
}

@Injectable()
export class SuperAdminGuardService implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const token = SessionFactory.getItem('access_token') 
        if (token.user_info) {
            if (token['user_info'].role === 'super-admin') {
                return true;
            }
        }
        this.router.navigate(["/auth/signin"]);
        return false;
    }
}

@Injectable()
export class SupervisorGuardService implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const token = SessionFactory.getItem('access_token') 
        if (token.user_info) {
            if (token['user_info'].role === 'supervisor' || token['user_info'].role === 'super-admin') {
                return true;
            }
        }
        this.router.navigate(["/auth/signin"]);
        return false;
    }
}

@Injectable()
export class ManagerGuardService implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const token = SessionFactory.getItem('access_token') 
        if (token.user_info) {
            if (token['user_info'].role === 'super-admin' || token['user_info'].role === 'supervisor' || token['user_info'].role === 'manager') {
                return true;
            }
        }
        this.router.navigate(["/auth/signin"]);
        return false;
    }
}
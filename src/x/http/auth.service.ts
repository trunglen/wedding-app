import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    public getToken() {
        return localStorage.getItem('access_token');
    }

    public setToken(token) {
        localStorage.setItem('access_token',token);
    }
    public authorize(token): boolean {
        return false;
    }
}
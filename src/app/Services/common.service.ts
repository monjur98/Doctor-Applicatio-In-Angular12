import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';
import { AppConstant } from '../app.constant';
import { catchError, delayWhen, map, retryWhen, scan, timeout } from 'rxjs/operators';
import { LoginModel } from '../login/LoginModel';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    localStorage: Storage;
    constructor(private httpClient: HttpClient, private router: Router) {
        this.localStorage = window.localStorage;
    }

    set(key: string, value: any): boolean {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }

    get isLocalStorageSupported(): boolean {
        return !!this.localStorage
    }

    login(data:LoginModel): Observable<any> {
        debugger;
        const headers = { 'content-type': 'application/json'} 
        const body=JSON.stringify(data); 
        return this.httpClient.post(AppConstant.config.apiBaseUrl+AppConstant.config.LoginApi, body,{'headers':headers})
    };

}
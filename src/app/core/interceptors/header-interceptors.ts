import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HeaderInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // logic
        console.log('Auth Interceptor Provider');
        console.log('URL: ' + req.url);
        const authToken = "My Auth Token";
        const authReq = req.clone({
            setHeaders: { Authorization: authToken }
        })
        return next.handle(authReq);
    } 
}
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication-service/authentication.service';
import { User } from '../modals/user';
import { stringify } from 'querystring';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser: User = this.authenticationService.currentUserValue;

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    user_token: currentUser.token,
                    user_id: currentUser.id.toString(),
                },
            });
        } else {
        }

        return next.handle(request);
    }
}

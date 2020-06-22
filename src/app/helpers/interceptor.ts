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
        console.log('Interceptor Called');
        // add authorization header with jwt token if available
        let currentUser: User = this.authenticationService.currentUserValue;
        console.log('User: ', currentUser);

        if (currentUser && currentUser.token) {
            console.log('Interceptor Adding Token');

            request = request.clone({
                setHeaders: {
                    user_token: currentUser.token,
                    user_id: currentUser.id.toString(),
                },
            });
            console.log('Request: ', request);
        } else {
            console.log('Interceptor Not Adding Token');
        }

        console.log('Interceptor Finishing');
        return next.handle(request);
    }
}

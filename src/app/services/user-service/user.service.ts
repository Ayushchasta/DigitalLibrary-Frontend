import { Injectable } from '@angular/core';
import { DataManagerService } from '../data-manager-service/data-manager.service';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = null;

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
}

  constructor(private dataManager : DataManagerService, private httpClient : HttpClient) {
    this.baseurl = dataManager.getServerHostname();
   }

   getUserList() {
    return this.httpClient.get(`${this.baseurl}/users/`).pipe(retry(1), catchError(this.handleError));
  }
}

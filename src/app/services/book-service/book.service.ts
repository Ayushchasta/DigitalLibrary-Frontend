import { Injectable } from '@angular/core';
import { DataManagerService } from '../data-manager-service/data-manager.service';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BookService {
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

    constructor(private dataManager: DataManagerService, private httpClient: HttpClient) {
        this.baseurl = dataManager.getServerHostname();
    }

    createNewBookOld(newBook) {
        return this.httpClient.post(`${this.baseurl}/Book/`, newBook).pipe(retry(1), catchError(this.handleError));
    }
    getBookList() {
        return this.httpClient.get(`${this.baseurl}/Books/`).pipe(retry(1), catchError(this.handleError));
    }
    deleteBook(bookId) {
        return this.httpClient.delete(`${this.baseurl}/Book/${bookId}`).pipe(retry(1), catchError(this.handleError));
    }
    downloadBook(docId: string) {
        return this.httpClient.get(`${this.baseurl}/Download/${docId.replace('Uploads/', '')}`, { responseType: 'text' }).pipe(retry(1), catchError(this.handleError));
    }
    createNewBook(formData) {
        return this.httpClient.post(`${this.baseurl}/Book`, formData, { responseType: 'text' }).pipe(retry(0), catchError(this.handleError));
    }
    verifyAdminStatus(bookId, adminStatus) {
        return this.httpClient.put(`${this.baseurl}/Book/${bookId}/${adminStatus}`, '').pipe(retry(1), catchError(this.handleError));
    }
}

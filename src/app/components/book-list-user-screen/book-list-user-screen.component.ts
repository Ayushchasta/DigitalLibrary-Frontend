import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/services/book-service/book.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';

@Component({
    selector: 'app-book-list-user-screen',
    templateUrl: './book-list-user-screen.component.html',
    styleUrls: ['./book-list-user-screen.component.css'],
})
export class BookListUserScreenComponent implements OnInit {
    totalRecords: number;
    page: number = 1;
    bookList: any = [];
    fileToUpload: File;

    user: User = null;
    newBook = {
        bookName: '',
        bookAuthor: '',
        bookPublisher: '',
        adminApproval: '',
        publisherApproval: '',
    };

    searchBook = {
        searchBookName: '',
    };
    bookToView: any;

    getBookURL() {
        let fn = this.bookToView.fileName.replace('Uploads/', '');
        return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8000/View/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`);
    }

    onFileSelected(event) {
        this.fileToUpload = <File>event.target.files[0];
    }

    clickOnAdminStatus(bookId, adminStatus) {
        this.CheckAdminStatus(bookId, adminStatus);
    }

    CheckAdminStatus(bookId, adminStatus) {
        this.spinner.show();
        this.bookService.verifyAdminStatus(bookId, adminStatus).subscribe(
            (data) => {
                this.fetchBooks();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }
    functionOnSearch() {
        this.spinner.show();
        this.bookService.searchBook(this.searchBook.searchBookName).subscribe(
            (data) => {
                this.bookList = data;

                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    functionOnSubmit() {
        this.spinner.show();
        const formData = new FormData();
        formData.append('bookName', this.newBook.bookName);
        formData.append('bookPublisher', this.newBook.bookPublisher);
        formData.append('bookAuthor', this.newBook.bookAuthor);
        formData.append('file', this.fileToUpload);
        this.bookService.createNewBook(formData).subscribe(
            (data) => {
                this.newBook = {
                    bookName: '',
                    bookAuthor: '',
                    bookPublisher: '',
                    adminApproval: '',
                    publisherApproval: '',
                };
                this.fetchBooks();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    functionOnSubmitOld() {
        this.spinner.show();
        this.bookService.createNewBook(this.newBook).subscribe(
            (data) => {
                this.newBook = {
                    bookName: '',
                    bookAuthor: '',
                    bookPublisher: '',
                    adminApproval: '',
                    publisherApproval: '',
                };
                this.fetchBooks();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    constructor(private sanitizer: DomSanitizer, config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private bookService: BookService, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    open(content) {
        this.modalService.open(content);
    }
    openXl(content) {
        this.modalService.open(content, { size: 'xl' });
    }
    clickOnDelete(bookId) {
        this.deleteBooks(bookId);
    }

    clickOnDownload(docId) {
        this.downloadBooks(docId);
    }

    downloadBooks(docId) {
        this.spinner.show();
        this.bookService.downloadBook(docId).subscribe(
            (data) => {},
            (error) => {
                this.spinner.hide();
            }
        );
    }

    deleteBooks(bookId) {
        this.spinner.show();
        this.bookService.deleteBook(bookId).subscribe(
            (data) => {
                this.fetchBooks();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    fetchBooks() {
        this.spinner.show();
        this.bookService.getActiveBookList().subscribe(
            (data) => {
                this.bookList = data;
                this.totalRecords = this.bookList.length;
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    ngOnInit(): void {
        this.fetchBooks();
    }
}

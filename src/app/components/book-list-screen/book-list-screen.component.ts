import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/services/book-service/book.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-book-list-screen',
    templateUrl: './book-list-screen.component.html',
    styleUrls: ['./book-list-screen.component.css'],
})
export class BookListScreenComponent implements OnInit {
    bookList: any = [];
    fileToUpload: File;
    totalRecords: number;
    page: number = 1;
    addBookForm: FormGroup;

    user: User = null;
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

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addBookForm.invalid) {
            return;
        }

        this.spinner.show();
        const formData = new FormData();
        formData.append('bookName', this.f.bookName.value);
        formData.append('bookPublisher', this.f.bookPublisher.value);
        formData.append('bookAuthor', this.f.bookAuthor.value);
        formData.append('file', this.fileToUpload);
        this.bookService.createNewBook(formData).subscribe(
            (data) => {
                this.fetchBooks();
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    get f() {
        return this.addBookForm.controls;
    }

    /* functionOnSubmitOld() {
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
*/
    constructor(private formBuilder: FormBuilder, private sanitizer: DomSanitizer, config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private bookService: BookService, private authenticationService: AuthenticationService) {
        config.backdrop = 'static';
        config.keyboard = false;
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
        this.bookService.getBookList().subscribe(
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

        this.addBookForm = this.formBuilder.group({
            bookName: ['', Validators.required],
            bookAuthor: ['', Validators.required],
            bookPublisher: ['', Validators.required],
            bookile: [''],
        });
    }
}

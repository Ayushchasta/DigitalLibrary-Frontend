import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/services/book-service/book.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-book-list-screen',
    templateUrl: './book-list-screen.component.html',
    styleUrls: ['./book-list-screen.component.css'],
})
export class BookListScreenComponent implements OnInit {
    bookList: any = [];
    fileToUpload: File;

    newBook = {
        bookName: '',
        bookAuthor: '',
        bookPublisher: '',
    };
    bookToView: any;

    getBookURL() {
        let fn = this.bookToView.fileName.replace('Uploads/', '');
        return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8000/view/${fn}`);
    }

    onFileSelected(event) {
        console.log('onFileSelected => ', event);
        this.fileToUpload = <File>event.target.files[0];
    }

    functionOnSubmit() {
        this.spinner.show();
        const formData = new FormData();
        formData.append('bookName', this.newBook.bookName);
        formData.append('bookPublisher', this.newBook.bookPublisher);
        formData.append('bookAuthor', this.newBook.bookAuthor);
        formData.append('file', this.fileToUpload);
        console.log('functionOnSubmit => ', formData.getAll('bookName'));
        this.bookService.createNewBook(formData).subscribe(
            (data) => {
                this.newBook = {
                    bookName: '',
                    bookAuthor: '',
                    bookPublisher: '',
                };
                this.fetchBooks();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    functionOnSubmitOld() {
        this.spinner.show();
        console.log('functionOnSubmit', this.newBook);
        this.bookService.createNewBook(this.newBook).subscribe(
            (data) => {
                this.newBook = {
                    bookName: '',
                    bookAuthor: '',
                    bookPublisher: '',
                };
                this.fetchBooks();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    constructor(private sanitizer: DomSanitizer, config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private bookService: BookService) {
        config.backdrop = 'static';
        config.keyboard = false;
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
                console.log('Error: ', error);
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
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    fetchBooks() {
        this.spinner.show();
        this.bookService.getBookList().subscribe(
            (data) => {
                this.bookList = data;
                console.log('fetchBooks()', this.bookList);
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    ngOnInit(): void {
        this.fetchBooks();
    }
}

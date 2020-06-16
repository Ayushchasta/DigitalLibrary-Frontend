import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from 'src/app/services/book-service/book.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-book-list-screen',
    templateUrl: './book-list-screen.component.html',
    styleUrls: ['./book-list-screen.component.css'],
})
export class BookListScreenComponent implements OnInit {
    bookList: any = [];

    newBook = {
        bookName: '',
        bookAuthor: '',
        bookPublisher: '',
    };

    functionOnSubmit() {
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

    constructor(config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private bookService: BookService) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    open(content) {
        this.modalService.open(content);
    }

    clickOnDelete(bookId) {
        this.deleteBooks(bookId);
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

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-book-list-screen',
  templateUrl: './book-list-screen.component.html',
  styleUrls: ['./book-list-screen.component.css']
})
export class BookListScreenComponent implements OnInit {

  bookList : any = [];

  constructor(private spinner: NgxSpinnerService, private bookService:BookService) { }

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
          console.log(this.bookList);
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
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

  ngOnInit(): void {
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

}
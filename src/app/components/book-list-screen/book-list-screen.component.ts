import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-book-list-screen',
  templateUrl: './book-list-screen.component.html',
  styleUrls: ['./book-list-screen.component.css']
})
export class BookListScreenComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 0.8 seconds */
      this.spinner.hide();

      this.spinner.show();
    }, 800);
  }

}

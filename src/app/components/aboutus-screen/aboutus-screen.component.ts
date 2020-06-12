import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-aboutus-screen",
  templateUrl: "./aboutus-screen.component.html",
  styleUrls: ["./aboutus-screen.component.css"],
})
export class AboutusScreenComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 800);
  }
}

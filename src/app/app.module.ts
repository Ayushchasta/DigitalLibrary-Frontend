import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponentComponent } from "./components/navbar-component/navbar-component.component";
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";
import { AboutusScreenComponent } from "./components/aboutus-screen/aboutus-screen.component";
import { FooterComponentComponent } from "./components/footer-component/footer-component.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeScreenComponent,
    AboutusScreenComponent,
    FooterComponentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

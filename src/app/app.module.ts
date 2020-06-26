import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutusScreenComponent } from './components/aboutus-screen/aboutus-screen.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { BookListScreenComponent } from './components/book-list-screen/book-list-screen.component';
import { UserListScreenComponent } from './components/user-list-screen/user-list-screen.component';
import { BookListPublisherScreenComponent } from './components/book-list-publisher-screen/book-list-publisher-screen.component';
import { BookListUserScreenComponent } from './components/book-list-user-screen/book-list-user-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { Interceptor } from './helpers/interceptor';
import { SignUpScreenComponent } from './components/sign-up-screen/sign-up-screen.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundScreenComponent } from './components/page-not-found-screen/page-not-found-screen.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, NgbModule, NgxSpinnerModule, FormsModule, NgxPaginationModule],
    declarations: [
        AppComponent,
        NavbarComponentComponent,
        HomeScreenComponent,
        AboutusScreenComponent,
        FooterComponentComponent,
        BookListScreenComponent,
        UserListScreenComponent,
        BookListPublisherScreenComponent,
        BookListUserScreenComponent,
        LoginScreenComponent,
        SignUpScreenComponent,
        PageNotFoundScreenComponent,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}

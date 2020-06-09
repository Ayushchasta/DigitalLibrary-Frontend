import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutusScreenComponent } from './components/aboutus-screen/aboutus-screen.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeScreenComponent,
    AboutusScreenComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

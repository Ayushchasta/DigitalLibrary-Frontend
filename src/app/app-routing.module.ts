import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusScreenComponent } from "./components/aboutus-screen/aboutus-screen.component";
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";
import { BookListScreenComponent } from './components/book-list-screen/book-list-screen.component';
import { UserListScreenComponent } from './components/user-list-screen/user-list-screen.component';

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
  },
  {
    path: "about",
    component: AboutusScreenComponent,
  },
  {
    path: "users",
    component: UserListScreenComponent,
  },
  {
    path: "books",
    component: BookListScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

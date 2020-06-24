import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusScreenComponent } from './components/aboutus-screen/aboutus-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { BookListScreenComponent } from './components/book-list-screen/book-list-screen.component';
import { UserListScreenComponent } from './components/user-list-screen/user-list-screen.component';
import { BookListPublisherScreenComponent } from './components/book-list-publisher-screen/book-list-publisher-screen.component';
import { BookListUserScreenComponent } from './components/book-list-user-screen/book-list-user-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent,
    },
    {
        path: 'about',
        component: AboutusScreenComponent,
    },
    {
        path: 'users',
        component: UserListScreenComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'books',
        component: BookListScreenComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'publisherbooks',
        component: BookListPublisherScreenComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'userbooks',
        component: BookListUserScreenComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginScreenComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

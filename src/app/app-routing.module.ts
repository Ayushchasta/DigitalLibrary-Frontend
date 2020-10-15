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
import { SignUpScreenComponent } from './components/sign-up-screen/sign-up-screen.component';
import { PageNotFoundScreenComponent } from './components/page-not-found-screen/page-not-found-screen.component';
import { ManageAccountScreenComponent } from './components/manage-account-screen/manage-account-screen.component';

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
        path: 'manageaccount',
        component: ManageAccountScreenComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginScreenComponent,
    },
    {
        path: 'signup',
        component: SignUpScreenComponent,
    },
    {
        path: '**',
        component: PageNotFoundScreenComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

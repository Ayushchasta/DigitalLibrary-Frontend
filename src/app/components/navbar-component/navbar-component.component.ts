import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar-component.component.html',
    styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
    user: User = null;
    functionOnLogout() {
        console.log('Clicked On Logout');
        this.authenticationService.logout();
        if (!this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        //this.user = this.authenticationService.currentUserValue;
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    ngOnInit(): void {}
}

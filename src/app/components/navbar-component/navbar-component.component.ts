import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar-component.component.html',
    styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
    functionOnLogout() {
        console.log('Clicked On Logout');
        this.authenticationService.logout();
    }

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
    user: User = null;
    constructor(private spinner: NgxSpinnerService, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 0.8   seconds */
            this.spinner.hide();
        }, 800);
    }
}

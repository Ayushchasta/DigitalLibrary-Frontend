import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
    userLogin = {
        mobile_no: '',
        password: '',
    };

    functionOnSubmit() {
        console.log('functionOnSubmit', this.userLogin);
        this.spinner.show();

        this.authenticationService.login(this.userLogin.mobile_no, this.userLogin.password).subscribe(
            (data) => {
                if (data == null) {
                    this.spinner.hide();
                    alert('Invalid');
                } else {
                    this.spinner.hide();
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
            },
            (error) => {
                this.spinner.hide();
                alert('Id or Password Invalid');
            }
        );
    }

    constructor(private spinner: NgxSpinnerService, private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
}

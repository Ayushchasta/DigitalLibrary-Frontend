import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

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

        this.authenticationService.login(this.userLogin.mobile_no, this.userLogin.password).subscribe(
            (data) => {
                if (data == null) {
                    alert('Invalid');
                } else {
                    alert('Valid -> Redirecting');
                }
            },
            (error) => {
                alert('Id or Password Invalid');
            }
        );
    }

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {}
}

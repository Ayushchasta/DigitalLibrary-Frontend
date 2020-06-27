import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
    loginForm: FormGroup;

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.spinner.show();
        const formData = new FormData();
        formData.append('mobileNo', this.f.mobileNo.value);
        formData.append('password', this.f.password.value);
        this.authenticationService.login(this.f.mobileNo.value, this.f.password.value).subscribe(
            (data) => {
                if (data == null) {
                    this.loginForm.reset();
                    this.spinner.hide();
                    alert('Invalid');
                    this.submitted = false;
                } else {
                    this.loginForm.reset();
                    this.spinner.hide();

                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                    this.submitted = false;
                }
            },
            (error) => {
                this.spinner.hide();
                alert('Either Id Password is not correct Or the user is not Active yet ');
            }
        );
    }

    get f() {
        return this.loginForm.controls;
    }

    constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        this.spinner.show();

        this.loginForm = this.formBuilder.group({
            mobileNo: ['', [Validators.required, Validators.min(999999999)]],
            password: ['', [Validators.required, Validators.minLength(5)]],
        });

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
}

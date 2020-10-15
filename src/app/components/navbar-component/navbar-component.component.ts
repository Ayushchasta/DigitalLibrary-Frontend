import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar-component.component.html',
    styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
    user: User = null;
    updateProfileForm: FormGroup;
    profileData: any = [];

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.updateProfileForm.invalid) {
            return;
        }

        this.spinner.show();
        const formData = new FormData();
        formData.append('id', this.f.id.value);
        formData.append('name', this.f.name.value);
        formData.append('role', this.f.role.value);
        formData.append('mobile_no', this.f.mobile_no.value);
        formData.append('password', this.f.password.value);
        this.userService.updateProfile(formData).subscribe(
            (data) => {
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
                alert("Signout and Signin again to reflect changes");
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    get f() {
        return this.updateProfileForm.controls;
    }

    functionOnLogout() {
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
        this.authenticationService.logout();
        if (!this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    open(content) {
        this.modelservice.open(content);
    }

    constructor(private userService: UserService, private formBuilder: FormBuilder, config: NgbModalConfig, private authenticationService: AuthenticationService, private router: Router, private spinner: NgxSpinnerService, private modelservice: NgbModal) {
        //this.user = this.authenticationService.currentUserValue;
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    fetchProfileData() {
        this.spinner.show();
        this.userService.getProfileData().subscribe(
            (data) => {
                this.profileData = data[0];
                this.authenticationService.currentUser; 

                this.updateProfileForm = this.formBuilder.group({
                    id: [this.user.id],
                    name: [this.profileData.name],
                    mobile_no: [this.profileData.mobile_no],
                    role: [this.profileData.role],
                    password: [this.profileData.password],
                });

                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    ngOnInit(): void {
        this.fetchProfileData();
    }
}

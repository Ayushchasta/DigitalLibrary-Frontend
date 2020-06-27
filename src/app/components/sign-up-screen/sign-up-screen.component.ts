import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up-screen',
    templateUrl: './sign-up-screen.component.html',
    styleUrls: ['./sign-up-screen.component.css'],
})
export class SignUpScreenComponent implements OnInit {
    signupForm: FormGroup;
    fileToUpload: File;

    constructor(private formBuilder: FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private userService: UserService) {}

    ngOnInit(): void {
        this.spinner.show();

        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            role: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
            mobileNo: ['', [Validators.required, Validators.min(88888888)]],
        });

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
    }
    onFileSelected(event) {
        this.fileToUpload = <File>event.target.files[0];
    }

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.spinner.show();
        const formData = new FormData();
        formData.append('name', this.f.name.value);
        formData.append('role', this.f.role.value);
        formData.append('mobile_no', this.f.mobileNo.value);
        formData.append('password', this.f.password.value);
        formData.append('file', this.fileToUpload);
        this.userService.createNewUser(formData).subscribe(
            (data) => {
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.signupForm.controls;
    }
}

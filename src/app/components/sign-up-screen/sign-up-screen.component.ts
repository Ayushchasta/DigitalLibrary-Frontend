import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
    selector: 'app-sign-up-screen',
    templateUrl: './sign-up-screen.component.html',
    styleUrls: ['./sign-up-screen.component.css'],
})
export class SignUpScreenComponent implements OnInit {
    newUser = {
        name: '',
        role: '',
        mobile_no: '',
        password: '',
        status: '',
    };

    functionOnSubmit() {
        this.spinner.show();
        console.log('functionOnSubmit', this.newUser);
        this.userService.createNewUser(this.newUser).subscribe(
            (data) => {
                this.newUser = {
                    name: '',
                    role: '',
                    mobile_no: '',
                    password: '',
                    status: '',
                };
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    constructor(config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private userService: UserService) {}

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
    }
}

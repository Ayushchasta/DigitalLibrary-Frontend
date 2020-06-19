import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-list-screen',
    templateUrl: './user-list-screen.component.html',
    styleUrls: ['./user-list-screen.component.css'],
})
export class UserListScreenComponent implements OnInit {
    userList: any = [];

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
        this.UserService.createNewUser(this.newUser).subscribe(
            (data) => {
                this.newUser = {
                    name: '',
                    role: '',
                    mobile_no: '',
                    password: '',
                    status: '',
                };
                this.fetchUsers();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    constructor(config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private UserService: UserService) {}

    open(content) {
        this.modalService.open(content);
    }

    clickOnDelete(userId) {
        this.deleteUsers(userId);
    }

    clickOnUpdateStatus(userId, status) {
        this.updateStatus(userId, status);
    }

    updateStatus(userId, status) {
        this.spinner.show();
        this.UserService.updateStatus(userId, status).subscribe(
            (data) => {
                this.fetchUsers();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    deleteUsers(userId) {
        this.spinner.show();
        this.UserService.deleteUser(userId).subscribe(
            (data) => {
                this.fetchUsers();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    fetchUsers() {
        this.spinner.show();
        this.UserService.getUserList().subscribe(
            (data) => {
                this.userList = data;
                console.log(this.userList);
                this.spinner.hide();
            },
            (error) => {
                console.log('Error: ', error);
                this.spinner.hide();
            }
        );
    }

    ngOnInit(): void {
        this.fetchUsers();
    }
}

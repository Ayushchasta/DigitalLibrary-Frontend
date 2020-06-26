import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user-service/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { User } from 'src/app/modals/user';

@Component({
    selector: 'app-user-list-screen',
    templateUrl: './user-list-screen.component.html',
    styleUrls: ['./user-list-screen.component.css'],
})
export class UserListScreenComponent implements OnInit {
    totalRecords: number;
    page: number = 1;
    userList: any = [];

    newUser = {
        name: '',
        role: '',
        mobile_no: '',
        password: '',
        status: '',
    };

    userToView: any;
    user: User = null;
    getimgURL() {
        let fn = this.userToView.fileName.replace('Uploads/', '');
        return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8000/ViewImg/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`);
    }

    openXl(content) {
        this.modalService.open(content, { size: 'xl' });
    }

    functionOnSubmit() {
        this.spinner.show();
        this.userService.createNewUser(this.newUser).subscribe(
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
                this.spinner.hide();
            }
        );
    }

    constructor(private sanitizer: DomSanitizer, config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private userService: UserService, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

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
        this.userService.updateStatus(userId, status).subscribe(
            (data) => {
                this.fetchUsers();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    deleteUsers(userId) {
        this.spinner.show();
        this.userService.deleteUser(userId).subscribe(
            (data) => {
                this.fetchUsers();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    fetchUsers() {
        this.spinner.show();
        this.userService.getUserList().subscribe(
            (data) => {
                this.userList = data;
                this.totalRecords = this.userList.length;
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }

    ngOnInit(): void {
        this.fetchUsers();
    }
}

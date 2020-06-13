import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-list-screen',
  templateUrl: './user-list-screen.component.html',
  styleUrls: ['./user-list-screen.component.css']
})
export class UserListScreenComponent implements OnInit {

  userList : any = [];
  constructor(private spinner: NgxSpinnerService, private UserService:UserService) { }

  clickOnDelete(userId) {
    this.deleteUsers(userId);
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

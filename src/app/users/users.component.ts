import { Component, OnInit } from '@angular/core';
import { User } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: AppService) { }

  //users array that display users
  users: User[] = []

  ngOnInit(): void {
    //get users and push into users to display on users page
    this.service.getUsers().subscribe(data => {
      data.forEach((user: User) => {
        this.users.push(user);
      })
    })
  }

  onClickUser(user: User) {
    console.log(user);
  }

}

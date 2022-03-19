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

  users: User[] = [] //users array that display users

  ngOnInit(): void {
    //get users and push into users to display on users page
    this.service.getUsers().subscribe(users => {
      users.forEach((user: User) => {
        this.users.push(user);
      })
    },
      error => console.log('Eroor', error)
    )
  }
}

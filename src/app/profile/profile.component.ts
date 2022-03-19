import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user!: User; //user data
  private subId: any; //observable to get id from route

  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get user id from route and get user by user id
    this.subId = this.route.params.subscribe(params => {
      this.service.getUser(params['id']).subscribe(user => {
        this.user = user;
      })
    },
      error => console.log('Eroor', error)
    )
  }

  ngOnDestroy(): void {
    this.subId.unsubscribe();
  }

}

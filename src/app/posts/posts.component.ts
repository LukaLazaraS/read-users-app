import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, User } from '../app.models';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts!: Post[]; //user's posts
  user!: User; //user data
  private subId: any; //observable to get id from route

  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get user id from route and get posts by user id
    this.subId = this.route.params.subscribe(params => {
      this.service.getPosts(params['id']).subscribe(posts => {
        this.posts = posts;
      },
        error => console.log('Eroor', error)
      )
      //get user by id
      this.service.getUser(params['id']).subscribe(user => {
        this.user = user;
      },
        error => console.log('Eroor', error)
      )
    })
  }

  ngOnDestroy(): void {
    this.subId.unsubscribe();
  }

}

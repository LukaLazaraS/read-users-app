import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile/posts/:id', component: PostsComponent },
  { path: '', component: UsersComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

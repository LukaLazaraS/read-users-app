import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  api = "https://jsonplaceholder.typicode.com/";

  //gets users list
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}users`);
  }

  //gets one user by id
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.api}users/${id}`);
  }
}

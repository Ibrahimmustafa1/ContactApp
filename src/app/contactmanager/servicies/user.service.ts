import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: User[];
  allusers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  loadAll(): Observable<User[]> {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(usersUrl);
  }
  getAllUsers() {
    this.loadAll().subscribe((data) => {
      this.users = data;
      this.allusers.next(this.users);
    });
  }
  getUserByID(id: number): any {
    this.allusers.subscribe((data) => {
      this.users = data;
      console.log(id);
      this.users = this.users.filter((user) => user.id === id);
      this.user.next(this.users[0]);
    });
  }
  saveUser(user: User): void {
    let id;
    this.allusers.subscribe((data) => {
      id = data.length + 1;
      user.id = id;
      this.users = data;
      this.users.push(user);
    });
  }
}

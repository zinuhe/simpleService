import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: string [] = ['john', 'jill', 'peter'];

  getFirstUser() {
    return this.users[0];
  }

  getUsers() {
    return this.users;
  }
}

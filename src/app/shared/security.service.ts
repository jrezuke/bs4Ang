import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "./user";

@Injectable()
export class SecurityService {
  private authenticated = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticated.asObservable();
  user: User;

  constructor() {
    this.user = new User;
  }

  setAuthenticated(authenticated: boolean){
    this.authenticated.next(authenticated);
  }

  getAuthenticated(){
    return this.authenticated.getValue();
  }

}

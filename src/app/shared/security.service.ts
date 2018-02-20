import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable()
export class SecurityService {
  private authenticated = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticated.asObservable();

  constructor() { }

  setAuthenticated(authenticated: boolean){
    this.authenticated.next(authenticated);
  }

  getAuthenticated(){
    return this.authenticated.getValue();
  }

}

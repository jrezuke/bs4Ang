import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { SecurityService } from './shared/security.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginModalComponent } from './login/login-modal.component';
import { User } from './shared/user';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  isAuthenticated = false;
  user: User;

  constructor(private _securityService: SecurityService,
    private _modalService: BsModalService,
    private _changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._securityService.authenticated$.subscribe( authenticated =>{
      console.log("authenticated",authenticated);
      this.isAuthenticated = authenticated;

    });
  }

  onLogin(): void {
    this._securityService.setAuthenticated(true);
    this.user = new User();
    this.user.username = "jojo";
    const initialState = {
      title: 'Login',
      closeBtnName: 'Cancel'
    };

    this._modalService.onHide.subscribe(()=>{
      console.log("onHide:");
    });


    this.bsModalRef = this._modalService.show(LoginModalComponent, {initialState});

  }

  onLogout(): void {
    this._securityService.setAuthenticated(false);
  }

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { SecurityService } from './shared/security.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginModalComponent } from './login/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bsModalRef: BsModalRef;
  title = 'app';
  isAuthenticated = false;

  constructor(private _securityService: SecurityService,
    private _modalService: BsModalService) {
  }

  ngOnInit(): void {
    this._securityService.authenticated$.subscribe( authenticated =>{
      console.log("authenticated",authenticated);
      this.isAuthenticated = authenticated;
    });
  }

  onLogin(): void {
    this._securityService.setAuthenticated(true);
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this._modalService.show(LoginModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  onLogout(): void {
    this._securityService.setAuthenticated(false);
  }

}

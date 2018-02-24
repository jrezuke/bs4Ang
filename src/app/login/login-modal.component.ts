import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SecurityService } from '../shared/security.service';
import { User } from '../shared/user';

@Component({
  selector: 'modal-login',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  name: string;
  password: string;


  constructor(private _securityService: SecurityService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

  onSubmit(){

    this._securityService.user.password = this.password;
    this._securityService.user.username = this.name;
    console.log("onSubmit", this.name, this.password );
    this.bsModalRef.hide();
    this._securityService.setAuthenticated(true);
  }

}

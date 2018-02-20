import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'modal-login',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {
  closeBtnName: string = "close";
  user: User;
  loginForm = new FormGroup({
    userName: new FormControl(),
    passWord: new FormControl()

  });

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

}

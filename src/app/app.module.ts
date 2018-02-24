import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";

import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SecurityService } from './shared/security.service';
import { LoginModalComponent } from './login/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent
  ],
  entryComponents: [
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

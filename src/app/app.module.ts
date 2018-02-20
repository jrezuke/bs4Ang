import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

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
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

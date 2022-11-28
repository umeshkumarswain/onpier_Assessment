import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SigninSignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }

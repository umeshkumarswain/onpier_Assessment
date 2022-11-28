import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "../shared/components/sign-in/sign-in.component";
import {SignUpComponent} from "../shared/components/sign-up/sign-up.component";
import {SigninSignupComponent} from "./components/signin-signup/signin-signup.component";

const routes: Routes = [
  {
    path:'signin',
    component:SignInComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'',
    component:SigninSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

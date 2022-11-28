import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./shared/components/sign-in/sign-in.component";
import {SignUpComponent} from "./shared/components/sign-up/sign-up.component";
import {SigninSignupComponent} from "./user/components/signin-signup/signin-signup.component";
import {AuthGuardGuard} from "./shared/guards/auth-guard.guard";

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path:'',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

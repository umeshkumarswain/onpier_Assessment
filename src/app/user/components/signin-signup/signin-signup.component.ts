import {Component} from '@angular/core';
import {Control, IFormSettings} from 'src/app/shared/models/Control.model';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent {
  formControls: IFormSettings =
    {
      isHeaderRequired:true,
      headerText:' Sign In Here',
      subHeaderTest:'Please enter valid credentials to sign in',
      controls:
        [
          {
            name: 'username', label: 'Username/Email', type: 'text', placeholder: 'User',
            validators: {
              required: true,
              min: 3,
              max: 10
            }
          },
          {
            name: 'password', label: 'Password', type: 'password', placeholder: 'Password',
            validators: {
              required: true,
            }
          },
          {
            name: 'button', label: 'Submit', type: 'Submit', placeholder: 'How much money does it cost?',
            validators: {
              required: true,
            }
          }
        ]
    };
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  OnSubmit(userData: any) {
    if (!userData) {
      return;
    }
    if (localStorage.getItem('user') != null) {
      this.router.navigateByUrl('dashboard').then(console.log)
    } else {
      this.authService.signIn(userData.username, userData.password).then(console.log);
      this.router.navigateByUrl('dashboard').then(console.log)
    }

  }
}

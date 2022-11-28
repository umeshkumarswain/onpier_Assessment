import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot,} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    if (localStorage.getItem('user') != null){
      return true;
    }
    else{
      this.router.navigateByUrl('').then(r => console.log('Navigated to login page.'))
      return false;
    }

  }

}

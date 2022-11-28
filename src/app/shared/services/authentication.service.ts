import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn:boolean = false;
  constructor(private firebaseAUth : AngularFireAuth) { }

  async signIn(email:string,password:string){
      await this.firebaseAUth.signInWithEmailAndPassword(email,password).then(response =>{
        debugger
        this.isLoggedIn =true;
        debugger
        localStorage.setItem('user',JSON.stringify(response.user))
      })
  }

  signOut(){
    this.firebaseAUth.signOut();
    localStorage.removeItem('user')
  }
}

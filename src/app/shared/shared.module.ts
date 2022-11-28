import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {RouterLink} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }

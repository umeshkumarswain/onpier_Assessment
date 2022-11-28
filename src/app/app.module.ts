import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";
import {SharedModule} from "./shared/shared.module";
import {FirebaseApp} from "@angular/fire/app";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBPpeTPM2ycI0Un3OFt8QhO6ZfCl8-IXj0",
      authDomain: "flutter-844af.firebaseapp.com",
      projectId: "flutter-844af",
      storageBucket: "flutter-844af.appspot.com",
      messagingSenderId: "24868395728",
      appId: "1:24868395728:web:ac734c79570959a4b85cd5",
      measurementId: "G-XYKRVE4V83"
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

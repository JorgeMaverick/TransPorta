import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouterModule } from './router/auth-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp } from "firebase/app";
//import { firebaseConfig } from './components/firebase.conf';
//import { AngularFireModule } from '@angular/fire/compat/firebase.app.module';
//import { AngularFireModule } from '@angular/fire/compat/public_api';
import { AngularFireModule } from '@angular/fire/compat';

//const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyBdyQW7HdOdgeuxNvTwcf2gUYJfLVplguA",
  authDomain: "transportacol-e1814.firebaseapp.com",
  projectId: "transportacol-e1814",
  storageBucket: "transportacol-e1814.appspot.com",
  messagingSenderId: "150682102833",
  appId: "1:150682102833:web:363a7f460a302c505cb910",
  measurementId: "G-4J3G3CYFP4"
};


@NgModule({
  imports: [
    CommonModule,
    AuthRouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  declarations: [
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthModule { }

//import { SetPasswordComponent } from './../components/set-password/set-password.component';
//import { LoginComponent } from './../components/login/login.component';
//import { LoginLayoutComponent } from './../screens/login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { LoginComponent } from '../components/login/login.component';
//import { RecoverPasswordComponent } from '../components/recover-password/recover-password.component';
//import { NotAccountLoginComponent } from '../components/not-account-login/not-account-login.component';


const routes: Routes = [
  {path: 'login',
   component: LoginComponent,
  },{
    path: 'sign-up',
   component: SignUpComponent,
  },
   {
    redirectTo:'login',
    path:'',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouterModule {
}

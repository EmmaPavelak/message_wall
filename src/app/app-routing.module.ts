import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './footer/terms/terms.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
 { path: 'registration-confirm', component: RegistrationConfirmComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'terms', component: TermsComponent },
 /*  { path: 'contact', component: ContactComponent }, 
  { path: 'my-account', component: MyAccountComponent },*/
   /*{ path: 'not-found', component: FourOhFourComponent },*/
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

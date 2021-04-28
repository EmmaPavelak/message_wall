import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptComponent } from './concept/concept.component';
import { ContactConfirmComponent } from './contact/contact-confirm/contact-confirm.component';
import { ContactComponent } from './contact/contact.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TermsComponent } from './footer/terms/terms.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
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
  { path: 'edit-user',  canActivate: ['AdminGuard'], component: EditUserComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'contact-confirm', component: ContactConfirmComponent }, 
  { path: 'my-account', component: MyAccountComponent },
  { path: 'concept', component: ConceptComponent },
  { path: 'my-messages', component: MyMessagesComponent },
  { path: 'edit-message', component: EditMessageComponent },
   /*{ path: 'not-found', component: FourOhFourComponent },*/
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

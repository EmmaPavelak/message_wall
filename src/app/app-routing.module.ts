import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptComponent } from './concept/concept.component';
import { ContactConfirmComponent } from './contact/contact-confirm/contact-confirm.component';
import { ContactComponent } from './contact/contact.component';
import { EditChannelComponent } from './edit-channel/edit-channel.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TermsComponent } from './footer/terms/terms.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyChannelsComponent } from './my-channels/my-channels.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { OneChannelComponent } from './one-channel/one-channel.component';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'concept', component: ConceptComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
 { path: 'registration-confirm', component: RegistrationConfirmComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'contact-confirm', component: ContactConfirmComponent },  

  //ESPACE USER
  { path: 'my-account', component: MyAccountComponent }, 
  { path: 'my-messages', component: MyMessagesComponent },
  { path: 'my-channels', component: MyChannelsComponent },
  { path: 'one-channel/:id', component: OneChannelComponent },
  //ESPACE ADMIN - lazyloading
  //{ path: 'admin',  canActivate: ['AdminGuard'], loadChildren: () =>import('./admin.module').then(module => module.AdminModule) },
  { path: 'edit-user',  canActivate: ['AdminGuard'], component: EditUserComponent },
  { path: 'edit-message', canActivate: ['AdminGuard'], component: EditMessageComponent },
  { path: 'edit-channel', canActivate: ['AdminGuard'], component: EditChannelComponent },

   /*{ path: 'not-found', component: FourOhFourComponent },*/
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { TermsComponent } from './footer/terms/terms.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ContactComponent } from './contact/contact.component';
import { MessagewallComponent } from './messages/messagewall/messagewall.component';
import { AddMessageComponent } from './messages/add-message/add-message.component';
import { ConceptComponent } from './concept/concept.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { AsideProfilComponent } from './aside-profil/aside-profil.component';
import { EditMessageComponent } from './edit-message/edit-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    RegistrationConfirmComponent,
    ForgotPasswordComponent,
    TermsComponent,
    MyAccountComponent,
    EditUserComponent,
    ContactComponent,
    MessagewallComponent,
    AddMessageComponent,
    ConceptComponent,
    MyMessagesComponent,
    AsideProfilComponent,
    EditMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UsersService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},     
    {provide: 'AdminGuard', // Provider name
    useValue: (token: any) => {
      token=localStorage.getItem('token');
      
      if(token != null){
       /* if(jwt_decode(token).role =="Administrateur"){
          return true;
        }else{          
          return false;
        }*/
        return true;
      }else{
        return false;
      }
      
      
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

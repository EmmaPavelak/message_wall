import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  connectOK =true;

  loginForm: FormGroup;
  submitted = false;

constructor(private formBuilder: FormBuilder, private router: Router,private userService: UsersService) {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required] //, Validators.minLength(6)
  });
}
  ngOnInit(): void {
  }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }



login(){
  this.userService.loginUser(this.loginForm.value).subscribe( 
    res => {
      console.log(res);
      console.log("cool");
      //this.toastr.success('Votre compte a été créer avec succès.', 'Success');
      this.router.navigate(['home']);
      sessionStorage.setItem('isConnected', "true");
    },
    err => {
      console.log('Error occured:' , err);
      this.connectOK =false;
     // this.toastr.error(err.message, 'Error occured');
    }
  );

}


  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
  }
    console.warn('Your order has been submitted', this.loginForm.value);
    this.login();
     //this.loginForm.reset();
    //this.router.navigate(['home']);
  }
}

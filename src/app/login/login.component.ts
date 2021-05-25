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

  get f() { return this.loginForm.controls; }

  login(){

  this.userService.loginUser(this.loginForm.value).then(
    () => { this.router.navigate(['home']);})  
    .then(() => {
      window.location.reload();
    });;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }
    console.warn('Your order has been submitted', this.loginForm.value);
    this.login();   
  }
}

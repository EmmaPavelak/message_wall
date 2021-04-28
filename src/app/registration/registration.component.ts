import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { MustMatch } from '../_helpers/must-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  registerOK = true;
  registrationForm: FormGroup;
  submitted = false;

 

  ngOnInit(): void {
  }


  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UsersService) {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      tel: [''], 
      address: ['',Validators.required], 
      birthDate: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      nbmess:0,
      role:"Utilisateur"
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

get f() { return this.registrationForm.controls; }

saveUser(){
  this.userService.createUser(this.registrationForm.value).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['registration-confirm']);
    },
    err => {
      this.registerOK = false;
      console.log('Error occured:' , err);
    }
  );

}



  onSubmit(): void {
    this.submitted = true;
    
    if (this.registrationForm.invalid) {
        return;
    }
    console.warn('Your order has been submitted', this.registrationForm.value);
    this.saveUser();
  }

}



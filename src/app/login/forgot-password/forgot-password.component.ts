import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotForm: FormGroup;
  submitted = false;
 

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder) {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
get f() { return this.forgotForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      return;
  }
    console.warn('Your order has been submitted', this.forgotForm.value);
    this.forgotForm.reset();
  }

}

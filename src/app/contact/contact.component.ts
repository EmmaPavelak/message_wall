import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactForm: FormGroup;


  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private router: Router,private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

get f() { return this.contactForm.controls; }

saveContact(){
  this.contactService.createContact(this.contactForm.value).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['contact-confirm']);
    },
    err => {
      this.submitted = false;
      console.log('Error occured:' , err);
     // this.toastr.error(err.message, 'Error occured');
    }
  );

}



  onSubmit(): void {
  
    this.submitted = true;
    
    // stop here if form is invalid
      if (this.contactForm.invalid) {
        return;
    }
      console.warn('Your order has been submitted', this.contactForm.value);
      //this.registrationForm.value.password=Base64.stringify(sha256(this.registrationForm.value.password));
          this.saveContact();

      //this.registrationForm.reset();
      //this.router.navigate(['registration-confirm']);
  }


}

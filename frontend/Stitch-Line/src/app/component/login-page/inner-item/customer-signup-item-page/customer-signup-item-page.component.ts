import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../dto/CustomerDTO";
import Customer from "../../dto/Customer";
import {CustomerServiceService} from "../../../services/customer-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-signup-item-page',
  templateUrl: './customer-signup-item-page.component.html',
  styleUrls: ['./customer-signup-item-page.component.scss']
})
export class CustomerSignupItemPageComponent implements OnInit {

  signUpForm = new FormGroup({
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.minLength(10), Validators.required]),
    address: new FormControl('', [Validators.minLength(10), Validators.required]),
    username: new FormControl('', [Validators.minLength(10), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  });

  CUSTOMER_ROLE = 'customer';

  loading = false;

  constructor(private customerService: CustomerServiceService, private angularRouter:Router) { }

  ngOnInit(): void {
  }

  register() {

    this.loading = true;

    const customer = new Customer(this.signUpForm.get('address')?.value.toString().trim());

    const dto = new CustomerDTO(
      this.signUpForm.get('fName')?.value.toString().trim(),
      this.signUpForm.get('email')?.value.toString().trim(),
      this.signUpForm.get('mobile')?.value.toString().trim(),
      this.CUSTOMER_ROLE,
      this.signUpForm.get('username')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      customer
    );

    // console.log(dto);

      //call the user service register() method if user add successfully log into customer page
      this.customerService.register(dto).subscribe(response=>{
        this.loading = true;
        console.log(response);
        if (response.message === 'success'){
          this.angularRouter.navigate(['/customerPage']);
        }else {
          alert(response.message);
        }
      }, error=>{
        this.loading = false;
        console.log(error);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../dto/CustomerDTO";

@Component({
  selector: 'app-admin-signup-item-page',
  templateUrl: './admin-signup-item-page.component.html',
  styleUrls: ['./admin-signup-item-page.component.scss']
})
export class AdminSignupItemPageComponent implements OnInit {

  signUpForm = new FormGroup({
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.minLength(10), Validators.required]),
    nic: new FormControl('', [Validators.minLength(10), Validators.required]),
    empNum: new FormControl('', [Validators.minLength(4), Validators.required]),
    username: new FormControl('', [Validators.minLength(10), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  });

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  register() {

    this.loading = true;


    // const dto = new CustomerDTO(
    //   this.signUpForm.get('fName')?.value.toString().trim(),
    //   this.signUpForm.get('email')?.value.toString().trim(),
    //   this.signUpForm.get('email')?.value.toString().trim(),
    //   this.signUpForm.get('password')?.value.toString().trim(),
    //   '',
    //   true,
    // );

    // console.log(dto);

    // this.userService.register(dto).subscribe(response=>{
    //   this.loading = true;
    //   console.log(response);
    // }, error=>{
    //   this.loading = false;
    //   console.log(error);
    // })

  }
}

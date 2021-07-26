import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import CustomerDTO from "../../dto/CustomerDTO";
import {AdminServiceService} from "../../../services/admin-service.service";
import AdminDTO from "../../dto/AdminDTO";
import Admin from "../../dto/Admin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-signup-item-page',
  templateUrl: './admin-signup-item-page.component.html',
  styleUrls: ['./admin-signup-item-page.component.scss']
})
export class AdminSignupItemPageComponent implements OnInit {

  ADMIN_ROLE = 'admin';

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

  constructor(private adminService: AdminServiceService, private angularRouter:Router) { }

  ngOnInit(): void {
  }

  register() {

    this.loading = true;

    const admin = new Admin(
      this.signUpForm.get('nic')?.value.toString().trim(),
      this.signUpForm.get('empNum')?.value.toString().trim()
    );

    const dto = new AdminDTO(
      this.signUpForm.get('fName')?.value.toString().trim(),
      this.signUpForm.get('email')?.value.toString().trim(),
      this.signUpForm.get('mobile')?.value.toString().trim(),
      this.ADMIN_ROLE,
      this.signUpForm.get('username')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      admin
    );

    // console.log(dto);

    //call the admin service register() method if admin add successfully log into admin page
    this.adminService.register(dto).subscribe(response=>{
      this.loading = true;
      console.log(response);
      if (response.message === 'success'){
        this.angularRouter.navigate(['/adminPage']);
      }else {
        alert(response.message);
      }
    }, error=>{
      this.loading = false;
      console.log(error);
    })

  }
}

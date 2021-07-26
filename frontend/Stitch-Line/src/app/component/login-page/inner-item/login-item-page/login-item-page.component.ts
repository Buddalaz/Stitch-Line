import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-item-page',
  templateUrl: './login-item-page.component.html',
  styleUrls: ['./login-item-page.component.scss']
})
export class LoginItemPageComponent implements OnInit {

  loginForm =new FormGroup({
    username:new FormControl('',[Validators.required, Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  });

  constructor(private userService: UserService,private angularRouter:Router) { }

  ngOnInit(): void {
  }

  //check the username is exits or not if exits login to there individual role page
  login(){
    this.userService.login(this.loginForm.get('username')?.value.toString().trim()).subscribe(response=>{
        console.log(response);
        if (response.message=== 'success'){
          if (response.data.userRole==='admin'){
            this.angularRouter.navigate(['/adminPage']);
          }else if (response.data.userRole==='customer'){
            this.angularRouter.navigate(['/customerPage']);
          }
        }
    }, error=>{
      if (error.state === 500){

      }else if(error.state === 400){

      }else {
        console.log(error);
      }
    });
  }

}

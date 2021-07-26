import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  constructor(private angularRouter:Router) { }

  ngOnInit(): void {
  }

  //navigate to the loginPage
  logOut(){
    this.angularRouter.navigate(['/login']);
    // alert("log out");
  }
}

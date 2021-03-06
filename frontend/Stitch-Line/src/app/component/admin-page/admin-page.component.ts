import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private angularRouter:Router) { }

  ngOnInit(): void {
  }

  //navigate to the loginPage
  logOut() {
    this.angularRouter.navigate(['/login']);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { LoginItemPageComponent } from './component/login-page/inner-item/login-item-page/login-item-page.component';
import { AdminSignupItemPageComponent } from './component/login-page/inner-item/admin-signup-item-page/admin-signup-item-page.component';
import { CustomerSignupItemPageComponent } from './component/login-page/inner-item/customer-signup-item-page/customer-signup-item-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule, HttpHeaders} from "@angular/common/http";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    LoginItemPageComponent,
    AdminSignupItemPageComponent,
    CustomerSignupItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

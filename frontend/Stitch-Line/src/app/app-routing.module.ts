import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./component/customer-page/customer-page.component";
import {AdminPageComponent} from "./component/admin-page/admin-page.component";
import {LoginPageComponent} from "./component/login-page/login-page.component";
import {AdminSignupItemPageComponent} from "./component/login-page/inner-item/admin-signup-item-page/admin-signup-item-page.component";
import {CustomerSignupItemPageComponent} from "./component/login-page/inner-item/customer-signup-item-page/customer-signup-item-page.component";
import {LoginItemPageComponent} from "./component/login-page/inner-item/login-item-page/login-item-page.component";

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'', component:LoginPageComponent, children:[
      {path:'login',component:LoginItemPageComponent},
      {path:'admin',component:AdminSignupItemPageComponent},
      {path:'customer',component:CustomerSignupItemPageComponent}
    ]},
  {path:'customerPage', component:CustomerPageComponent},
  {path:'adminPage', component:AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

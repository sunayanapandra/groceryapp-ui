import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AuthGuard } from './auth.guard';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';

import { HommeComponent } from './homme/homme.component';
import { ListordersComponent } from './listorders/listorders.component';

import { ListproductsComponent } from './listproducts/listproducts.component';
import { ListusersComponent } from './listusers/listusers.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  
    {path:'homme',component:HommeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'listproducts',component:ListproductsComponent},
    {path:'listusers',component:ListusersComponent},
    {path:'addproducts',component:AddproductsComponent},
    {path:'updateproducts/:id',component:UpdateproductsComponent},
    {path:'addusers',component:AddusersComponent},
    {path:'updateuser/:id',component:UpdateuserComponent},
    {path:'displayproducts',component:DisplayproductsComponent},
    {path:'addtocart',component:AddtocartComponent},
    {path:'listorders',component:ListordersComponent},
    
    {path:'',redirectTo:'home',pathMatch:'full'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

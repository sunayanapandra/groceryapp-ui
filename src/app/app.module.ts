import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListproductsComponent } from './listproducts/listproducts.component';

import { HommeComponent } from './homme/homme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ListusersComponent } from './listusers/listusers.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ToastrModule } from 'ngx-toastr';
import { AddusersComponent } from './addusers/addusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ListordersComponent } from './listorders/listorders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ListproductsComponent,
    HommeComponent,
    ListusersComponent,
    AddproductsComponent,
    UpdateproductsComponent,
    AddusersComponent,
    UpdateuserComponent,
    DisplayproductsComponent,
    AddtocartComponent,
    ListordersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

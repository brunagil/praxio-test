import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NavbarModule } from './../../../components/navbar/module/navbar.module';
import { ButtonModule } from './../../../components/button/module/button.module';

import { LoginComponent } from './../login-component/login.component';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    ButtonModule,
    FormsModule
  ]
})
export class LoginModule { }

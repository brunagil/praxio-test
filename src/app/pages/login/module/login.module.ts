import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }

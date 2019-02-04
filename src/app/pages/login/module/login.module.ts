import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './../login-component/login.component';
import { ButtonComponent } from './../../../components/button/button.component';

@NgModule({
  declarations: [
    LoginComponent,
    ButtonComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class LoginModule { }

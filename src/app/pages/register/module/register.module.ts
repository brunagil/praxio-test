import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { NavbarModule } from './../../../components/navbar/module/navbar.module';

import { ButtonModule } from './../../../components/button/module/button.module';
import  { RegisterComponent } from './../register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent,
  ],
  imports: [
    // CommonModule,
    // NavbarModule,
    ButtonModule,
    FormsModule,
  ]

})
export class RegisterModule { }

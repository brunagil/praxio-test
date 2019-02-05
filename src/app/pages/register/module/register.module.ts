import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

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
    CommonModule,
    ButtonModule,
    FormsModule,
  ]

})
export class RegisterModule { }

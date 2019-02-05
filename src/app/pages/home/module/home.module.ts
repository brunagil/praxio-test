import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './../../../components/navbar/module/navbar.module';

import { HomeComponent } from '../home-component/home.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { CardsComponent } from '../../../components/cards/cards.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@NgModule({
  declarations: [
      HomeComponent,
      HeaderComponent,
      CardsComponent,
      FooterComponent
  ],
  exports: [
      HomeComponent,
      HeaderComponent,
      CardsComponent,
      FooterComponent

  ],
  imports: [
      CommonModule,
      NavbarModule
  ],
})

export class HomeModule { }

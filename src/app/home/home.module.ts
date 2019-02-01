import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { HeaderComponent } from './../components/header/header.component';
import { CardsComponent } from './../components/cards/cards.component';
import { FooterComponent } from './../components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent, 
    HeaderComponent,
    CardsComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class HomeModule { }

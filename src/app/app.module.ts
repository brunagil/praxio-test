import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [ //declara todas as diretivas que vamos utilizar nesse módulo
    AppComponent, NavbarComponent, HeaderComponent, FooterComponent, CardsComponent, FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //serviços que vão ficar disponíveis para todos os módulos; escopo global da aplicação (router)
  bootstrap: [AppComponent] //componente que serve como container para nosso projeto
})
export class AppModule { }

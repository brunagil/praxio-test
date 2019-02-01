import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ //declara todas as diretivas que vamos utilizar nesse módulo
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [], //serviços que vão ficar disponíveis para todos os módulos; escopo global da aplicação (router)
  bootstrap: [AppComponent] //componente que serve como container para nosso projeto
})
export class AppModule { }

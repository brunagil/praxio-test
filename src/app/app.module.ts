import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './pages/home/module/home.module';
import { LoginModule } from './pages/login/module/login.module';
import { RegisterModule } from './pages/register/module/register.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [ //declara componentes que vamos utilizar nesse módulo
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
  ],
  
  providers: [], //serviços que vão ficar disponíveis para todos os módulos; escopo global da aplicação (router)
  bootstrap: [AppComponent] //componente que serve como container para nosso projeto
})
export class AppModule { }

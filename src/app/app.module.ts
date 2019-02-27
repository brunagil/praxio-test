import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarModule } from './components/navbar/module/navbar.module';
import { HomeModule } from './pages/home/module/home.module';
import { LoginModule } from './pages/login/module/login.module';
import { RegisterModule } from './pages/register/module/register.module';
import { PageNotFoundComponent } from './pages/notFound/notFound.component';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ //componentes que vamos utilizar no app.module
    AppComponent, PageNotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    NavbarModule,
    HomeModule,
    LoginModule,
    RegisterModule,
  ],
 
  providers: [], //serviços que vão ficar disponíveis para todos os módulos; escopo global da aplicação (ex: router)
  bootstrap: [AppComponent] //componente que serve como container para nosso projeto
})
export class AppModule { }

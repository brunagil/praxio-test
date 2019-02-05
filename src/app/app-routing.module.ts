import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeModule } from './pages/home/module/home.module';
// import { LoginModule } from './pages/login/module/login.module';
// import { RegisterModule } from './pages/register/module/register.module';

import  { HomeComponent } from './pages/home/home-component/home.component';
import { LoginComponent } from './pages/login/login-component/login.component';
import { RegisterComponent } from './pages/register/register.component';  
import { PageNotFoundComponent } from './pages/notFound/notFound.component';


const Routes: any = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: RegisterComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }


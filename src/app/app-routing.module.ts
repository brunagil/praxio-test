import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './pages/home/module/home.module';
import { LoginModule } from './pages/login/module/login.module';
import { RegisterModule } from './pages/register/module/register.module';

const routes: Routes = [
  { path: '', component: HomeModule},
  { path: 'login', component: LoginModule},
  { path: 'cadastro', component: RegisterModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


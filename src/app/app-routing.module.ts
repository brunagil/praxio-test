import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home-component/home.component';
// import { LoginComponent } from './login/login-component/login.component';
// import { SigninComponent} from './'

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'cadastro', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

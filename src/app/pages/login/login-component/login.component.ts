import { Component } from '@angular/core';
import { LocalStorageService } from './../../../service/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Entrar'
  button_title = 'Entrar'

  constructor(private localStorage: LocalStorageService, private router: Router) {
    if (this.localStorage.getItem('userEmail')) {
        this.router.navigateByUrl('/');
    }
}

  onSubmit(loginForm) {
    const email = loginForm.form.value.email;
    this.localStorage.setItem('userEmail', email);
    this.router.navigateByUrl('/');
  }
}

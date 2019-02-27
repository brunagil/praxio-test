import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../../../service/local-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //para a validação do form: Utilização do FormGroup
  myForm: FormGroup;

  constructor(private localStorage: LocalStorageService, private router: Router, private fb: FormBuilder) {
      if (this.localStorage.getItem('userEmail')) {
          this.router.navigateByUrl('/');
      }
  }

  //Validação do formulário - Reactive Forms (Basics)
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]],
      password: ['',[
        Validators.required,
      ]],
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  //para pegar os inputs e emitir mensagens para o usuário
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  onSubmit(loginForm) {
      const email = loginForm.myForm.value.email;
      this.localStorage.setItem('userEmail', email);
      this.router.navigateByUrl('/');
  }

}

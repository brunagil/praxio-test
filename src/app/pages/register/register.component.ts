import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../service/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]

  
})

export class RegisterComponent {
  // title = 'Cadastrar'
  // subtitle_1 = 'Informações Pessoais'
  // subtitle_2 = 'Endereço'
  // button_title = 'Cadastrar'

  @Input() type: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() length: number;
  @Input() required: boolean;
  @Input() isAPassword: boolean;
  @Input() isANumber: boolean;

  constructor(private localStorage: LocalStorageService, private router: Router) {
    if (this.localStorage.getItem('userEmail')) {
        this.router.navigateByUrl('/');
    }
}

  onSubmit = registerForm => {
    const email = registerForm.form.value.email;
    this.localStorage.setItem('userEmail', email);
    this.router.navigateByUrl('/');
}


}
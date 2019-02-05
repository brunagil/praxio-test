import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../../service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent {
  constructor(private localStorage: LocalStorageService, private router: Router) {
    if (!this.localStorage.getItem('userEmail')) {
        this.router.navigateByUrl('/login');
    }
  }
}

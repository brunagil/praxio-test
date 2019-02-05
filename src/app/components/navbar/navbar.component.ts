import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../service/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private localStorage: LocalStorageService, private router: Router) { }

  isUserLogged = () => !this.localStorage.getItem('userEmail');

  userLogout() {
      this.localStorage.removeItem('userEmail');
      this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}

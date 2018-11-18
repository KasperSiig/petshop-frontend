import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedIn = false;

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') !== null)
      this.loggedIn = true;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

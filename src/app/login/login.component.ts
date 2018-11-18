import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  onSubmit() {
    this.authenticationService.login(
      this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(success => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.errorMsg = 'Login failed';
      });
  }
}

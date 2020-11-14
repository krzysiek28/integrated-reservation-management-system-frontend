import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(user) {
    console.log(user);
    console.log(user.login);
    console.log(user.password)
    this.goToWelcomePage()
  }

  goToWelcomePage() {
    this._router.navigate(['/welcome-page']);
  }
}

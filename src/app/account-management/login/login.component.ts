import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountManagementFormGenerator} from '../utils/account-management-form-generator';
import {AccountManagementControlNames} from '../utils/account-management-consts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountControlNames = AccountManagementControlNames;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  hidePassword = true;
  loginFormGroup: FormGroup;

  constructor(private _router: Router,
              private _authService: AuthService,
              private _tokenStorage: TokenStorageService) {
    this.loginFormGroup = AccountManagementFormGenerator.generateLoginFormGroup();
  }

  ngOnInit(): void {
    if (this._tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    if(this.loginFormGroup.valid){
      this._authService.login(this.loginFormGroup.getRawValue()).subscribe(
        data => {
          console.log('normalny case');
          this._tokenStorage.saveToken(data.token);
          this._tokenStorage.saveUser(data);

          this.reloadPage();
          this.goToWelcomePage();
        },
        err => {
          console.log(err.error);
          this.errorMessage = err.error.message; //todo fix for message
          this.errorMessage = err.error.error; //fix
          this.isLoginFailed = true;
        }
      );
    }
  }

  goToWelcomePage() {
    this._router.navigate(['/welcome-page']);
  }

  reloadPage(): void {
    window.location.reload();
  }
}

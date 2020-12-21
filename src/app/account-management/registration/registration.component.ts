import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountManagementFormGenerator} from '../utils/account-management-form-generator';
import {AccountManagementControlNames} from '../utils/account-management-consts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  accountControlNames = AccountManagementControlNames;
  registrationFormGroup: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  hidePassword = true;
  confirmationPasswordFormControl = new FormControl('', Validators.required);
  passwordsNotMatch = false;

  constructor(private _authService: AuthService,
              private _router: Router) {
    this.registrationFormGroup = AccountManagementFormGenerator.generateRegisterFormGroup();
  }

  ngOnInit(): void {
    this.registrationFormGroup.get(this.accountControlNames.PASSWORD).valueChanges.subscribe(() => {
      this.confirmationPasswordFormControl.setErrors(null);
      this.passwordsNotMatch = false;
    });
    this.confirmationPasswordFormControl.valueChanges.subscribe(() => {
      this.confirmationPasswordFormControl.setErrors(null);
      this.passwordsNotMatch = false;
    });
  }

  onSubmit(): void {
    if (this.registrationFormGroup.valid && this.confirmationPasswordFormControl.valid) {
      if (this.registrationFormGroup.controls[this.accountControlNames.PASSWORD].value !== this.confirmationPasswordFormControl.value) {
        this.confirmationPasswordFormControl.setErrors({'incorrect': true});
        this.passwordsNotMatch = true;
      } else {
        this._authService.register(this.registrationFormGroup.getRawValue()).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
        console.log('goToWelcome');
        this.reloadPage();
        this.goToWelcomePage();
      }
    }
  }

  getEmailErrorMessage() {
    if (this.registrationFormGroup.controls[this.accountControlNames.EMAIL].hasError('required')) {
      return 'Email jest wymagany';
    }

    return this.registrationFormGroup.controls[this.accountControlNames.EMAIL].hasError('email') ? 'Nie poprawny email' : '';
  }

  getConfirmationPasswordErrorMessage() {
    if (this.confirmationPasswordFormControl.hasError('required')) {
      return 'Pole "powtórz hasło" jest wymagane';
    }

    return this.passwordsNotMatch ? 'Hasła się nie zgadzają' : '';
  }

  goToWelcomePage() {
    this._router.navigate(['/welcome-page']);
  }

  reloadPage(): void {
    window.location.reload();
  }
}

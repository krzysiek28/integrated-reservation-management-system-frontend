import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountManagementFormGenerator} from '../utils/account-management-form-generator';
import {AccountManagementControlNames} from '../utils/account-management-consts';
import {LoginRequest} from '../objects/LoginRequest';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';
import {ProfileEditPersonalDataDialog} from '../profile/component/profile-edit-personal-data-dialog/profile-edit-personal-data-dialog';
import {PersonalDataModel} from '../../objects/models/PersonalDataModel';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {MatDialog} from '@angular/material/dialog';
import {ProfileAddPersonalDataDialog} from './profile-add-personal-data-dialog/profile-add-personal-data-dialog';
import {UserApiService} from '../profile/services/user-api-service';

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
  isLoggedIn = false;
  errorMessage = '';
  hidePassword = true;
  confirmationPasswordFormControl = new FormControl('', Validators.required);
  passwordsNotMatch = false;

  constructor(private _router: Router,
              private _authService: AuthService,
              private _tokenStorage: TokenStorageService,
              private _dialog: MatDialog,
              private _userApi: UserApiService) {
    this.registrationFormGroup = AccountManagementFormGenerator.generateRegisterFormGroup();
  }

  ngOnInit(): void {
    if (this._tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.goToWelcomePage();
    }

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
            this.isSuccessful = true;
            this.isSignUpFailed = false;

            this.logInToApp();
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
      }
    }
  }

  logInToApp() {
    this._authService.login(<LoginRequest> {
      userName: this.registrationFormGroup.get(this.accountControlNames.USERNAME).value,
      password: this.registrationFormGroup.get(this.accountControlNames.PASSWORD).value
    }).subscribe(
      data => {
        this._tokenStorage.saveToken(data.token);
        this._tokenStorage.saveUser(data);

        this.isLoggedIn = true;

        this.openAddPersonalDataDialog(data.id);
      },
      () => {
        this.goToLoginPage();
      }
    );
  }

  openAddPersonalDataDialog(userId: number): void {
    const dialogRef = this._dialog.open(ProfileAddPersonalDataDialog, {
      width: '500px',
      data: new PersonalDataModel()
    });

    dialogRef.afterClosed().subscribe(result => {
      if(isNotNullOrUndefined(result)){
        this._userApi.updateUserPersonalData(userId, result).subscribe(() => {
          this.reloadPage();
        }, error => console.log('error occured: ', error));
      } else {
        this.reloadPage();
      }
    });
  }

  goToLoginPage() {
    this._router.navigate(['/login']);
  }

  reloadPage(): void {
    window.location.reload();
  }

  goToWelcomePage() {
    setTimeout(() => {
      this._router.navigate(['/welcome-page']);
    }, 3000);
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
}

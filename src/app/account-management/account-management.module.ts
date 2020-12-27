import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthService} from './services/auth.service';
import {TokenStorageService} from './services/token-storage.service';
import {authInterceptorProviders} from './services/auth.interceptor';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ProfileComponent} from './profile/component/profile.component';
import { ProfileEditPersonalDataDialog } from './profile/component/profile-edit-personal-data-dialog/profile-edit-personal-data-dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileAddPersonalDataDialog } from './registration/profile-add-personal-data-dialog/profile-add-personal-data-dialog';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileEditPersonalDataDialog,
    ProfileAddPersonalDataDialog
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    AuthService,
    TokenStorageService,
    authInterceptorProviders
  ]
})
export class AccountManagementModule {
}

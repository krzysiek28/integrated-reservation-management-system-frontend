import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [],
  providers: [
    AuthService
  ]
})
export class AccountManagementModule {
}

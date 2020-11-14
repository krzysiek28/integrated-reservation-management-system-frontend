import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageDesktopComponent} from './modules/common/welcome-page/component/welcome-page-desktop.component';
import {ReservationDesktopComponent} from './modules/common/reservation/component/reservation-desktop.component';
import {LoginComponent} from './account-management/login/login.component';
import {RegistrationComponent} from './account-management/registration/registration.component';
import {AdminReservationManagementDesktopComponent} from './modules/admin/admin-reservation-management/component/admin-reservation-management-desktop.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome-page', pathMatch: 'full'},
  {path: 'welcome-page', component: WelcomePageDesktopComponent},
  {path: 'reservation', component: ReservationDesktopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin-reservation-management', component: AdminReservationManagementDesktopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

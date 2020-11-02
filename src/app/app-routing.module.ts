import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageDesktopComponent} from './modules/welcome-page/component/welcome-page-desktop.component';
import {ReservationDesktopComponent} from './modules/reservation/component/reservation-desktop.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome-page', pathMatch: 'full'},
  {path: 'welcome-page', component: WelcomePageDesktopComponent},
  {path: 'reservation', component: ReservationDesktopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

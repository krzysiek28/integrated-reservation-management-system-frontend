import {NgModule} from '@angular/core';
import {WelcomePageDesktopComponent} from './component/welcome-page-desktop.component';
import {TestService} from '../../../tmp/services/TestService';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    WelcomePageDesktopComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    CommonModule,
  ],
  providers: [
    TestService
  ]
})
export class WelcomePageModule {
}

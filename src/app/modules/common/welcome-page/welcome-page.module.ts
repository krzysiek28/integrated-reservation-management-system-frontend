import {NgModule} from '@angular/core';
import {WelcomePageDesktopComponent} from './component/welcome-page-desktop.component';
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
  ]
})
export class WelcomePageModule {
}

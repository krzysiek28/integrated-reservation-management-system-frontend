import {NgModule} from '@angular/core';
import {WelcomePageDesktopComponent} from './component/welcome-page-desktop.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    WelcomePageDesktopComponent
  ],
    imports: [
        FormsModule,
        MatTableModule,
        CommonModule,
        MatCardModule,
    ],
  providers: [
  ]
})
export class WelcomePageModule {
}

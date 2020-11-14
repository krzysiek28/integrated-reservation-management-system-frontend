import {Component} from '@angular/core';
import {ApplicationVariant} from './app-consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'irms-frontend';
  applicationVariants = ApplicationVariant;
  applicationVariant: ApplicationVariant;

  constructor() {
    this.applicationVariant = ApplicationVariant.NO_CONTEXT;
  }
}

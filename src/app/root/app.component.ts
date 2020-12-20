import {Component, OnInit} from '@angular/core';
import {ApplicationVariant} from './app-consts';
import {TokenStorageService} from '../account-management/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'irms-frontend';
  applicationVariants = ApplicationVariant;
  applicationVariant: ApplicationVariant;
  private role: string;
  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {
    this.applicationVariant = ApplicationVariant.NO_CONTEXT;
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) { //todo move to Appcontext
      const user = this.tokenStorageService.getUser();

      switch (user.role) {
        case 'USER_ROLE': {
          this.applicationVariant = this.applicationVariants.LOGGED_AS_USER;
          break;
        }
        case 'ADMIN_ROLE':{
          this.applicationVariant = this.applicationVariants.LOGGED_AS_ADMIN;
          break;
        }
        default: {
          this.applicationVariant = this.applicationVariants.NO_CONTEXT;
          break;
        }
      }

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

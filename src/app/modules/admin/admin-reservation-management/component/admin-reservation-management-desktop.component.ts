import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../../../../context/app-context.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-reservation-management-desktop',
  templateUrl: './admin-reservation-management-desktop.component.html',
  styleUrls: ['./admin-reservation-management-desktop.component.css']
})
export class AdminReservationManagementDesktopComponent implements OnInit {

  constructor(private _router: Router,
              private _appContext: AppContextService) {
  }

  ngOnInit(): void {
    if(!this._appContext.isLoggedAsAdmin()) {
      this.goToWelcomePage();
    }
  }

  goToWelcomePage() {
    this._router.navigate(['/welcome-page']);
  }
}

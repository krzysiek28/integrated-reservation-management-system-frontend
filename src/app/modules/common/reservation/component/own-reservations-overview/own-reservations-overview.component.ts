import {Component, OnInit} from '@angular/core';
import {ReservationApiService} from '../../services/reservation-api-service';
import {MatDialog} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {AppContextService} from '../../../../../context/app-context.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-own-reservations-overview',
  templateUrl: './own-reservations-overview.component.html',
  styleUrls: ['./own-reservations-overview.component.css']
})
export class OwnReservationsOverviewComponent implements OnInit {

  reservationList: ReservationModel[];

  constructor(private _reservationApi: ReservationApiService,
              private _dialog: MatDialog,
              private _appContext: AppContextService,
              private _router: Router) {
  }

  ngOnInit(): void {
    if (!this._appContext.isLoggedAsUser()) {
      this.goToWelcomePage();
    }
    this.getOwnReservations();
  }

  getOwnReservations() {
    this._reservationApi.getOwnReservations(this._appContext.getUser().id).subscribe(result => {
      this.reservationList = result;
    });
  }

  goToWelcomePage() {
    this._router.navigate(['/welcome-page']);
  }
}

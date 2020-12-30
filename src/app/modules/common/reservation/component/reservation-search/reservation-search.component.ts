import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {ReservationFormGenerator} from '../../utils/reservation-form-generator';
import {ReservationControlNames} from '../../utils/reservation-consts';
import {DateUtil} from '../../../../../utils/date-util';
import {ReservationApiService} from '../../services/reservation-api-service';
import {ConfirmationPopup} from '../../../../../utils/confirmation-popup/confirmation-popup';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css']
})
export class ReservationSearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  reservationControlNames = ReservationControlNames;
  reservationList: ReservationModel[];

  constructor(private _reservationApi: ReservationApiService,
              private _dialog: MatDialog,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.searchFormGroup = ReservationFormGenerator.generateSearchReservationFormGroup();
    this.searchReservations();
  }

  searchReservations() {
    if (this.searchFormGroup.valid) {
      this.reservationList = new Array();
      this._reservationApi.findAvailableReservationsByDateRange(this.getDateFromControl().value, this.getDateToControl().value).subscribe(response => {
        this.reservationList = response;
      });
    }
  }

  next() {
    this.getDateFromControl().setValue(DateUtil.addDays(this.getDateFromControl().value, 7));
    this.getDateToControl().setValue(DateUtil.addDays(this.getDateToControl().value, 7));
    this.searchReservations();
  }

  previous() {
    this.getDateFromControl().setValue(DateUtil.subDays(this.getDateFromControl().value, 7));
    this.getDateToControl().setValue(DateUtil.subDays(this.getDateToControl().value, 7));
    this.searchReservations();
  }

  getDateFromControl(): AbstractControl {
    return this.searchFormGroup.get(this.reservationControlNames.DATE_FROM);
  }

  getDateToControl() {
    return this.searchFormGroup.get(this.reservationControlNames.DATE_TO);
  }

  onReservationClick(reservation: ReservationModel) {
    const dialogRef = this._dialog.open(ConfirmationPopup, {
      width: '700px',
      data: `Czy chcesz zarezerwować wizyte dnia ${new Date(reservation?.date).toLocaleDateString()} na godzine ${reservation?.timeFrom}?`
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this.showReservationProcess(reservation.id);
      }
    });
  }

  showReservationProcess(reservationId: number) {
    this._router.navigate(['/reservation-process'], {queryParams: {'reservationId': reservationId}});
  }
}

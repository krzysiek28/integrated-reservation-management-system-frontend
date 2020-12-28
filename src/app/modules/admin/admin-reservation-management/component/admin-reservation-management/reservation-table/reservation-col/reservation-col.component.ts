import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';
import {ReservationStatus} from '../../../../../../../objects/models/ReservationStatus';
import {AdminReservationManagementApiService} from '../../../../services/admin-reservation-management-api.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationPopup} from '../../../../../../../utils/confirmation-popup/confirmation-popup';
import {ReservationUtils} from '../../../../../../../utils/ReservationUtils';

@Component({
  selector: 'app-reservation-col',
  templateUrl: './reservation-col.component.html',
  styleUrls: ['./reservation-col.component.css']
})
export class ReservationColComponent implements OnInit {

  @Input('reservationByDate') reservationByDate: ReservationModel[];
  @Input('accessToDetails') accessToDetails: boolean = false;
  @Input('accessToRemove') accessToRemove: boolean = false;
  @Input('accessToReservation') accessToReservation: boolean = false;
  @Output('onDeleteItem') onDeleteItemEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output('onDetailsClick') onDetailsClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();
  @Output('onReservationClick') onReservationClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();
  reservationStatuses = ReservationStatus;

  constructor(private _reservationApiService: AdminReservationManagementApiService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  removeReservation(value) {
    const dialogRef = this._dialog.open(ConfirmationPopup, {
      width: '400px',
      data: 'Czy na pewno chcesz usunąć termin wizyty?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._reservationApiService.deleteReservation(value.id).subscribe(() => {
          this.onDeleteItemEventEmitter.emit(value.id);
        });
      }
    });
  }

  detailsClicked(reservation: ReservationModel) {
    this.onDetailsClickEventEmitter.emit(reservation);
  }

  reservationClicked(reservation: ReservationModel) {
    this.onReservationClickEventEmitter.emit(reservation);
  }

  getClassName(reservation: ReservationModel) {
    return ReservationUtils.getClassName(reservation);
  }
}

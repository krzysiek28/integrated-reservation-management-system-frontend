import {Component, Input, OnInit, Output} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';
import {ReservationStatus} from '../../../../../../../objects/models/ReservationStatus';
import {AdminReservationManagementApiService} from '../../../../services/admin-reservation-management-api.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reservation-col',
  templateUrl: './reservation-col.component.html',
  styleUrls: ['./reservation-col.component.css']
})
export class ReservationColComponent implements OnInit {

  @Input('reservationByDate') reservationByDate: ReservationModel[];
  @Input('accessToDetails') accessToDetails: boolean = false;
  @Input('accessToRemove') accessToRemove: boolean = false;
  @Output('onDeleteItem') onDeleteItemEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output('onDetailsClick') onDetailsClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();
  reservationStatuses = ReservationStatus;

  constructor(private _reservationApiService: AdminReservationManagementApiService) {
  }

  ngOnInit(): void {
  }

  removeReservation(value) {
    this._reservationApiService.deleteReservation(value.id).subscribe(() => {
      this.onDeleteItemEventEmitter.emit(value.id);
    });
  }

  detailsClicked(reservation: ReservationModel) {
    this.onDetailsClickEventEmitter.emit(reservation);
  }

  getClassName(reservation: ReservationModel) {
    switch (reservation.status) {
      case ReservationStatus.RESERVED: {
        return 'reserved';
      }
      case ReservationStatus.AVAILABLE: {
        return 'available';
      }
      case ReservationStatus.CANCELED: {
        return 'canceled';
      }
      case ReservationStatus.CLOSED: {
        return 'closed';
      }
      default: {
        return '';
      }
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';
import {ReservationStatus} from '../../../../../../../objects/models/ReservationStatus';

@Component({
  selector: 'app-reservation-col',
  templateUrl: './reservation-col.component.html',
  styleUrls: ['./reservation-col.component.css']
})
export class ReservationColComponent implements OnInit {

  @Input('reservationByDate') reservationByDate: ReservationModel[];
  @Input('accessToDetails') accessToDetails: boolean = false;
  @Input('accessToRemove') accessToRemove: boolean = false;
  reservationStatuses = ReservationStatus;

  constructor() { }

  ngOnInit(): void {
  }

  removeReservation(value) {
    //todo reservation to remove;
  }

  getClassName(reservation: ReservationModel) {
    switch(reservation.status) {
      case ReservationStatus.RESERVED: {
        return "reserved";
      }
      case ReservationStatus.AVAILABLE: {
        return "available"
      }
      case ReservationStatus.CANCELED: {
        return "canceled"
      }
      case ReservationStatus.CLOSED: {
        return "closed"
      }
      default: {
        return "";
      }
    }
  }
}

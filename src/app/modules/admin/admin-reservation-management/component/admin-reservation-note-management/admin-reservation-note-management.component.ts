import { Component, OnInit } from '@angular/core';
import {AdminReservationManagementApiService} from '../../services/admin-reservation-management-api.service';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-admin-reservation-note-management',
  templateUrl: './admin-reservation-note-management.component.html',
  styleUrls: ['./admin-reservation-note-management.component.css']
})
export class AdminReservationNoteManagementComponent implements OnInit {

  closedReservations: ReservationModel[];

  constructor(private _reservationApiService: AdminReservationManagementApiService) { }

  ngOnInit(): void {
    this._reservationApiService.fetchClosedReservations().subscribe(response => {
      this.closedReservations = response;
    })
  }

  onDetailsClicked(reservation: ReservationModel) {
    console.log(reservation);
  }
}

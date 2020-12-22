import {Component, OnInit} from '@angular/core';
import {AdminReservationManagementApiService} from '../services/admin-reservation-management-api.service';
import {ReservationApiService} from '../../../common/reservation/services/reservation-api-service';
import {FormGroup} from '@angular/forms';
import {AdminReservationManagementFormGenerator} from '../utils/admin-reservation-management-form-generator';
import {ReservationManagementControlNames} from '../utils/admin-reservation-management-consts';

@Component({
  selector: 'app-admin-reservation-management-desktop',
  templateUrl: './admin-reservation-management-desktop.component.html',
  styleUrls: ['./admin-reservation-management-desktop.component.css']
})
export class AdminReservationManagementDesktopComponent implements OnInit {

  // reservationList: ReservationModel[];
  // reservationInput: ReservationModel; //todo change to formGroup
  reservationManagementControlNames = ReservationManagementControlNames;
  reservationManagementFormGroup: FormGroup;

  constructor(private _reservationManagementApiService: AdminReservationManagementApiService,
              private _reservationApiService: ReservationApiService) {
    this.reservationManagementFormGroup = AdminReservationManagementFormGenerator.generateReservationManagementFormGroup();
  }

  ngOnInit(): void {
    // this.findAvailableReservations();
  }

  // private findAvailableReservations() {
  //   this._reservationApiService.findAvailableReservationsByDateRange(new Date(2017, 11, 11), new Date(2022, 2, 12)).subscribe(data => {
  //     this.reservationList = data;
  //   });
  // }
  //
  // addReservation(/*event - model*/) {
  //   //todo formGroup is valid and patchValue
  //   this._reservationManagementApiService.addReservation(this.reservationInput).subscribe(() => this.findAvailableReservations());
  // }



}

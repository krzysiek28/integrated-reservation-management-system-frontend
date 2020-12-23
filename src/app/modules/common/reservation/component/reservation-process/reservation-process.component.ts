import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {ReservationApiService} from '../../services/reservation-api-service';
import {FormGroup} from '@angular/forms';
import {ReservationFormGenerator} from '../../utils/reservation-form-generator';
import {ReservationControlNames} from '../../utils/reservation-consts';

@Component({
  selector: 'app-reservation-process',
  templateUrl: './reservation-process.component.html',
  styleUrls: ['./reservation-process.component.css']
})
export class ReservationProcessComponent implements OnInit {

  reservationControlNames = ReservationControlNames;
  reservationModel: ReservationModel;
  reservationId: number;
  reservationInformationFormGroup: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _reservationApiService: ReservationApiService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
    });

    this._reservationApiService.getReservation(this.reservationId).subscribe(response => {
      this.reservationModel = response;
    });

    this.reservationInformationFormGroup = ReservationFormGenerator.generateReservationInformationFormGroup()
  }

  onBack() {
    this.showSearchProcess()
  }

  showSearchProcess() {
    this._router.navigate(['/reservation']);
  }

  makeReservation() {

  }
}

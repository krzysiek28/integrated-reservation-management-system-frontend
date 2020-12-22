import {Component, Input, OnInit} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-reservation-row',
  templateUrl: './reservation-row.component.html',
  styleUrls: ['./reservation-row.component.css']
})
export class ReservationRowComponent implements OnInit {

  @Input('reservationModel') reservationModel: ReservationModel;
  @Input('accessToDetails') accessToDetails: boolean;
  @Input('accessToRemove') accessToRemove: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

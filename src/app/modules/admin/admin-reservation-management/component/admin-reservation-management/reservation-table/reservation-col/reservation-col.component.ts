import {Component, Input, OnInit} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-reservation-col',
  templateUrl: './reservation-col.component.html',
  styleUrls: ['./reservation-col.component.css']
})
export class ReservationColComponent implements OnInit {

  @Input() reservationByDate: ReservationModel[];

  constructor() { }

  ngOnInit(): void {
  }

}

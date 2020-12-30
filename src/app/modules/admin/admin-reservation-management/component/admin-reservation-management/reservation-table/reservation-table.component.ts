import {Component, Input, OnInit, Output} from '@angular/core';
import {ReservationModel} from '../../../../../../objects/models/ReservationModel';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  @Input('accessToDetails') accessToDetails: boolean = false;
  @Input('accessToRemove') accessToRemove: boolean = false;
  @Input('accessToReservation') accessToReservation: boolean = false;
  @Input('accessToContactInfo') accessToContactInfo: boolean = false;
  @Output('onDeleteItem') onDeleteItemEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output('onDetailsClick') onDetailsClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();
  @Output('onReservationClick') onReservationClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();

  _reservations: ReservationModel[];
  listOfDates: Date[] = new Array();

  constructor() {
  }

  get reservations(): ReservationModel[] {
    return this._reservations;
  }

  @Input('reservations')
  set reservations(reservations: ReservationModel[]) {
    this._reservations = reservations;
    this.calculateDateListWithReservations();
  }

  ngOnInit(): void {
    this.calculateDateListWithReservations();
  }

  private calculateDateListWithReservations() {
    this.reservations.forEach(element => {
      let dateTmp = new Date(element.date);
      let year = dateTmp.getFullYear();
      let month = dateTmp.getMonth();
      let date = dateTmp.getDate();

      let newDate = new Date(year, month, date);
      if (!this.dateAlreadyExistOnList(newDate)) {
        this.listOfDates.push(newDate);
      }
    });
  }

  private dateAlreadyExistOnList(date: Date): boolean {
    return this.listOfDates.filter(element => this.compareDates(element, date)).length > 0;
  }

  resolveReservationsByDate(date: Date) :ReservationModel[] {
    let reservations = this.reservations.map(obj => ({...obj}));
    return reservations.filter(reservation => this.compareDates(date, new Date(reservation.date)));
  }

  private compareDates(dateA: Date, dateB: Date) {
    return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
  }

  emitEventOnDeleteItem() {
    this.onDeleteItemEventEmitter.emit();
  }

  emitEventOnDetailClick(event) {
    this.onDetailsClickEventEmitter.emit(event);
  }

  emitEventOnReservationClicked(event) {
    this.onReservationClickEventEmitter.emit(event);
  }

}

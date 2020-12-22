import {Component, OnInit} from '@angular/core';
import {ReservationManagementControlNames, ReservationTimeStates} from '../../utils/admin-reservation-management-consts';
import {FormControl, FormGroup} from '@angular/forms';
import {AdminReservationManagementFormGenerator} from '../../utils/admin-reservation-management-form-generator';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {MatDialog} from '@angular/material/dialog';
import {AdminReservationAddDialog} from './add-reservation-dialog/admin-reservation-add-dialog';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {AdminReservationsAddDialog} from './add-reservations-dialog/admin-reservations-add-dialog';

@Component({
  selector: 'app-admin-reservation-management',
  templateUrl: './admin-reservation-management.component.html',
  styleUrls: ['./admin-reservation-management.component.css']
})
export class AdminReservationManagementComponent implements OnInit {

  visitDurationStates = ReservationTimeStates.TIME_DURATION_STATES;
  breakDurationStates = ReservationTimeStates.BREAK_DURATION_STATES;
  selectedVisitDuration: string;
  selectedBreakDuration: string;
  reservationModel: ReservationModel;
  reservationModelList: ReservationModel[];
  reservationManagementControlNames = ReservationManagementControlNames;
  singleReservationManagementFormGroup: FormGroup;
  cycleReservationManagementFormGroup: FormGroup;
  selectedTab = new FormControl(0);

  constructor(private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.singleReservationManagementFormGroup = AdminReservationManagementFormGenerator.generateReservationManagementFormGroup();
    this.cycleReservationManagementFormGroup = AdminReservationManagementFormGenerator.generateMultipleReservationManagementFormGroup();
    this.initHandlers();
  }

  private initHandlers() {
    this.selectedTab.valueChanges.subscribe((value) => {
      if (value === 0) {
        this.fetchReservationList(this.getDateControl(this.singleReservationManagementFormGroup).value);
      } else if (value === 1) {
        this.fetchReservationList(this.getDateControl(this.cycleReservationManagementFormGroup).value);
      }
    });
    this.getDateControl(this.singleReservationManagementFormGroup).valueChanges.subscribe(value => {
      if (this.selectedTab.value === 0) {
        this.fetchReservationList(value);
      }
    });
    this.getDateControl(this.cycleReservationManagementFormGroup).valueChanges.subscribe(value => {
      if (this.selectedTab.value === 1) {
        this.fetchReservationList(value);
      }
    });
  }

  getDateControl(formGroup: FormGroup) {
    return formGroup.get(this.reservationManagementControlNames.DATE);
  }

  fetchReservationList(date: Date) {
    console.log('fetchData');
    console.log(date);
  }

  addReservation() {
    if (this.singleReservationManagementFormGroup.valid) {
      this.openAddReservationDialog();
    }
  }

  addAllReservations() {
    if (this.cycleReservationManagementFormGroup.valid) {
      this.openAddAllReservationsDialog();
    }
  }

  private openAddReservationDialog(): void {
    const dialogRef = this._dialog.open(AdminReservationAddDialog, {
      width: '450px',
      data: this.singleReservationManagementFormGroup.getRawValue()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this.fetchReservationList(result.date);
      }
    });
  }

  private openAddAllReservationsDialog(): void {
    const dialogRef = this._dialog.open(AdminReservationsAddDialog, {
      width: '450px',
      data: this.calculateListOfReservations()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this.fetchReservationList(result.date);
      }
    });
  }

  private calculateListOfReservations(): ReservationModel[] {
    let cycleReservations = this.cycleReservationManagementFormGroup.getRawValue();

    let reservations: ReservationModel[] = new Array();

    let timeFrom: Date = this.parseTimeToDateTime(cycleReservations.date, cycleReservations.timeFrom);

    for (let count = 0; count < cycleReservations.visitCount; count++) {
      reservations.push(<ReservationModel> {
        date: cycleReservations.date,
        timeFrom: timeFrom,
        timeTo: this.calculateTimeTo(timeFrom, cycleReservations.visitDuration)
      });

      timeFrom = this.calculateNewTimeFrom(timeFrom, cycleReservations.visitDuration, cycleReservations.breakDuration);
    }

    return reservations;
  }

  private parseTimeToDateTime(date: Date, time: string): Date {
    let dateTime = new Date(date);
    let timeParts: string[] = time.split(':');
    dateTime.setHours(+timeParts[0]);
    dateTime.setMinutes(+timeParts[1]);
    dateTime.setSeconds(0);
    return dateTime;
  }

  private calculateNewTimeFrom(lastTimeFrom: Date, visitDuration: string, breakDuration: string): Date {
    let timeTo: Date = this.calculateTimeTo(lastTimeFrom, visitDuration);
    return this.addTime(timeTo, breakDuration);
  }

  private calculateTimeTo(timeFrom: Date, visitDuration: string): Date {
    return this.addTime(timeFrom, visitDuration);
  }

  private addTime(time: Date, timeDuration: string) :Date {
    let newTime = new Date(time);
    let minutes = time.getMinutes() + this.getMinutesFromStringTimeDuration(timeDuration);
    let hours = time.getHours() + this.getHoursFromStringTimeDuration(timeDuration);
    if (minutes >= 60) {
      minutes -= 60;
      hours += 1;
    }

    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    return newTime;
  }

  private getHoursFromStringTimeDuration(timeDuration: string): number {
    if (timeDuration.includes('h')) {
      let timeDurationParts = timeDuration.split(' ');
      return +timeDurationParts[0].replace(/[^0-9]+/g, '');
    } else {
      return 0;
    }
  }

  private getMinutesFromStringTimeDuration(timeDuration: string): number {
    if (timeDuration.includes('min')) {
      if (timeDuration.includes('h')) {
        let timeDurationParts = timeDuration.split(' ');
        return +timeDurationParts[1].replace(/[^0-9]+/g, '');
      } else {
        return +timeDuration.replace(/[^0-9]+/g, '');
      }
    } else {
      return 0;
    }
  }
}

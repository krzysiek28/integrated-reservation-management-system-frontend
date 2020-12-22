import { Component, OnInit } from '@angular/core';
import {ReservationManagementControlNames, ReservationTimeStates} from '../../utils/admin-reservation-management-consts';
import {FormControl, FormGroup} from '@angular/forms';
import {AdminReservationManagementFormGenerator} from '../../utils/admin-reservation-management-form-generator';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {MatDialog} from '@angular/material/dialog';
import {AdminReservationAddDialog} from './add-reservation-dialog/admin-reservation-add-dialog';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

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

  constructor(private _dialog: MatDialog) { }

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

  addAllReservation() {
    if (this.cycleReservationManagementFormGroup.valid) {
      this.openAddReservationDialog();

    }
  }

  openAddReservationDialog(): void {
    const dialogRef = this._dialog.open(AdminReservationAddDialog, {
      width: '450px',
      data: this.singleReservationManagementFormGroup.getRawValue()
    });

    dialogRef.afterClosed().subscribe(result => {
      if(isNotNullOrUndefined(result)) {
        this.fetchReservationList(result.date);
      }
    });
  }

  openAddReservationsDialog(): void {
    const dialogRef = this._dialog.open(AdminReservationAddDialog, {
      width: '500px',
      data: this.singleReservationManagementFormGroup.getRawValue()
    });

    dialogRef.afterClosed().subscribe(result => {
      if(isNotNullOrUndefined(result)) {
        this.fetchReservationList(result.date);
      }
    });
  }
}

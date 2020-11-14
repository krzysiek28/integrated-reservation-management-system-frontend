import {Component, OnInit} from '@angular/core';
import {ReservationFormGenerator} from '../utils/reservation-form-generator';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reservation-desktop',
  templateUrl: './reservation-desktop.component.html',
  styleUrls: ['./reservation-desktop.component.css']
})
export class ReservationDesktopComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
    this.formGroup = ReservationFormGenerator.generateFormGroup();
  }

  ngOnInit(): void {

  }

  searchReservations() {
    if(this.formGroup.valid) {
      console.log(this.formGroup.get('startDate').value);
      console.log(this.formGroup.get('endDate').value);
    } else {
      console.log('invalid form Group!!');
    }
  }
}

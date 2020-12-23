import {Component, OnInit} from '@angular/core';
import {ReservationFormGenerator} from '../utils/reservation-form-generator';
import {FormControl, FormGroup} from '@angular/forms';
import {ReservationControlNames} from '../utils/reservation-consts';
import {AppContextService} from '../../../../context/app-context.service';

@Component({
  selector: 'app-reservation-desktop',
  templateUrl: './reservation-desktop.component.html',
  styleUrls: ['./reservation-desktop.component.css']
})
export class ReservationDesktopComponent implements OnInit {

  formGroup: FormGroup;
  reservationControlNames = ReservationControlNames;

  isUserLogged: boolean = false;
  selectedTab = new FormControl(0);

  constructor(private _appContext: AppContextService) {
    this.isUserLogged = _appContext.isLoggedAsUser();
    // this.formGroup = ReservationFormGenerator.generateFormGroup();
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

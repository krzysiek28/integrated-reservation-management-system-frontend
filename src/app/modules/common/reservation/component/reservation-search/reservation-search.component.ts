import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ReservationManagementControlNames} from '../../../../admin/admin-reservation-management/utils/admin-reservation-management-consts';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {ReservationSearchRequest} from '../../../../admin/admin-reservation-management/objects/ReservationSearchRequest';
import {ReservationFormGenerator} from '../../utils/reservation-form-generator';
import {ReservationControlNames} from '../../utils/reservation-consts';
import {DateUtil} from '../../../../../utils/date-util';
import {ReservationApiService} from '../../services/reservation-api-service';

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css']
})
export class ReservationSearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  reservationControlNames = ReservationControlNames;
  reservationList: ReservationModel[];

  constructor(private _reservationApi: ReservationApiService) {
  }

  ngOnInit(): void {
    this.searchFormGroup = ReservationFormGenerator.generateSearchReservationFormGroup();
    this.searchReservations()
  }

  searchReservations() {
    if (this.searchFormGroup.valid) {
      this._reservationApi.findAvailableReservationsByDateRange(this.getDateFromControl().value, this.getDateToControl().value).subscribe(response => {
        this.reservationList = response;
      });
    }
  }

  next() {
    this.getDateFromControl().setValue(DateUtil.addDays(this.getDateFromControl().value, 7));
    this.getDateToControl().setValue(DateUtil.addDays(this.getDateToControl().value, 7));
    this.searchReservations();
  }

  previous() {
    this.getDateFromControl().setValue(DateUtil.subDays(this.getDateFromControl().value, 7));
    this.getDateToControl().setValue(DateUtil.subDays(this.getDateToControl().value, 7));
    this.searchReservations();
  }

  getDateFromControl(): AbstractControl {
    return this.searchFormGroup.get(this.reservationControlNames.DATE_FROM);
  }

  getDateToControl() {
    return this.searchFormGroup.get(this.reservationControlNames.DATE_TO);
  }
}

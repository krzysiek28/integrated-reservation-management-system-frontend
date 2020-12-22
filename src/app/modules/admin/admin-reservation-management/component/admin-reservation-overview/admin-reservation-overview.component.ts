import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AdminReservationManagementFormGenerator} from '../../utils/admin-reservation-management-form-generator';
import {AdminReservationManagementApiService} from '../../services/admin-reservation-management-api.service';
import {ReservationManagementControlNames} from '../../utils/admin-reservation-management-consts';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {ReservationSearchRequest} from '../../objects/ReservationSearchRequest';
import {ReservationStatus} from '../../../../../objects/models/ReservationStatus';

@Component({
  selector: 'app-admin-reservation-overview',
  templateUrl: './admin-reservation-overview.component.html',
  styleUrls: ['./admin-reservation-overview.component.css']
})
export class AdminReservationOverviewComponent implements OnInit {

  searchFormGroup: FormGroup;
  reservationManagementControlNames = ReservationManagementControlNames;
  reservationStatuses: string[] = ['Zarezerwowana', 'Dostępna', 'Odwołana', 'Zrealizowana', 'Dowolny'];
  reservationList: ReservationModel[];

  constructor(private _reservationApiService: AdminReservationManagementApiService) {
  }

  ngOnInit(): void {
    this.searchFormGroup = AdminReservationManagementFormGenerator.generateSearchReservationFormGroup();
  }

  searchReservations() {
    if (this.searchFormGroup.valid) {
      let searchModel: ReservationSearchRequest = this.searchFormGroup.getRawValue();
      searchModel.reservationStatus = this.resolveReservationStatus(searchModel.reservationStatus);
      this._reservationApiService.searchReservations(searchModel).subscribe(response => {
        this.reservationList = response;
      });
    }
  }

  onDetailsClicked(value) {

  }

  private resolveReservationStatus(status: string): ReservationStatus {
    switch (status) {
      case 'Zarezerwowana': {
        return ReservationStatus.RESERVED;
      }
      case 'Dostępna': {
        return ReservationStatus.AVAILABLE;
      }
      case 'Odwołana': {
        return ReservationStatus.CANCELED;
      }
      case 'Zrealizowana': {
        return ReservationStatus.CLOSED;
      }
      default: {
        return null;
      }
    }
  }
}

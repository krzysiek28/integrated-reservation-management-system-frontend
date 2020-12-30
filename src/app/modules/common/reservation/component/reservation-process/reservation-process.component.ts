import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationModel} from '../../../../../objects/models/ReservationModel';
import {ReservationApiService} from '../../services/reservation-api-service';
import {FormGroup} from '@angular/forms';
import {ReservationFormGenerator} from '../../utils/reservation-form-generator';
import {ReservationControlNames} from '../../utils/reservation-consts';
import {AppContextService} from '../../../../../context/app-context.service';
import {UserApiService} from '../../../../../account-management/profile/services/user-api-service';
import {PersonalDataModel} from '../../../../../objects/models/PersonalDataModel';
import {ReservationUtils} from '../../../../../utils/ReservationUtils';

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
              private _reservationApiService: ReservationApiService,
              private _appContext: AppContextService,
              private _userService: UserApiService) {
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
    });

    this._reservationApiService.getReservation(this.reservationId).subscribe(response => {
      this.reservationModel = response;
    });

    if (this._appContext.isLoggedAsUser()) {
      this._userService.getUserById(this._appContext.getUser().id).subscribe(result => {
        this.reservationInformationFormGroup = ReservationFormGenerator.generateReservationInformationFormGroup(result.personalData);
      })

    } else {
      this.reservationInformationFormGroup = ReservationFormGenerator.generateReservationInformationFormGroup();
    }
  }

  onBack() {
    this.showSearchProcess();
  }

  showSearchProcess() {
    this._router.navigate(['/reservation']);
  }

  makeReservation() {
    if(this.reservationInformationFormGroup.valid){
      this._reservationApiService.reserve(this.reservationId, {
        userId: this._appContext.isLoggedAsUser() ? this._appContext.getUser().id : null,
        personalDataModel: this.createPersonalDataModel(),
        comment: this.reservationInformationFormGroup.get(this.reservationControlNames.COMMENT).value
      }).subscribe(result => {
        this.reservationModel = result;
      })
    }
  }

  private createPersonalDataModel(): PersonalDataModel {
    return <PersonalDataModel> {
      firstName: this.reservationInformationFormGroup.get(this.reservationControlNames.FIRST_NAME).value,
      lastName: this.reservationInformationFormGroup.get(this.reservationControlNames.LAST_NAME).value,
      phoneNumber: this.reservationInformationFormGroup.get(this.reservationControlNames.PHONE_NUMBER).value,
      contactEmail: this.reservationInformationFormGroup.get(this.reservationControlNames.EMAIL).value,
    }
  }

  getClassName(reservation: ReservationModel) {
    return ReservationUtils.getClassName(reservation);
  }
}

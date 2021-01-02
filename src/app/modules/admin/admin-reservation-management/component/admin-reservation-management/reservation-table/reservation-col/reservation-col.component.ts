import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';
import {ReservationStatus} from '../../../../../../../objects/models/ReservationStatus';
import {AdminReservationManagementApiService} from '../../../../services/admin-reservation-management-api.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationPopup} from '../../../../../../../utils/confirmation-popup/confirmation-popup';
import {ReservationUtils} from '../../../../../../../utils/ReservationUtils';
import {PersonalDataModel} from '../../../../../../../objects/models/PersonalDataModel';
import {ContactInfoDialog} from '../../../admin-reservation-overview/contact-info-dialog/contact-info-dialog';
import {AppContextService} from '../../../../../../../context/app-context.service';
import {FillReservationDetails} from '../fill-reservation-details/fill-reservation-details';
import {AdminVisitDetailsApiService} from '../../../../services/admin-visit-details-api.service';
import {ReservationDetailsInfo} from '../reservation-details-info/reservation-details-info';
import {ReservationApiService} from '../../../../../../common/reservation/services/reservation-api-service';

@Component({
  selector: 'app-reservation-col',
  templateUrl: './reservation-col.component.html',
  styleUrls: ['./reservation-col.component.css']
})
export class ReservationColComponent implements OnInit {

  @Input('reservationByDate') reservationByDate: ReservationModel[];
  @Input('accessToDetails') accessToDetails: boolean = false;
  @Input('accessToRemove') accessToRemove: boolean = false;
  @Input('accessToReservation') accessToReservation: boolean = false;
  @Input('accessToCancelReservation') accessToCancelReservation: boolean = false;
  @Input('accessToContactInfo') accessToContactInfo: boolean = false;
  @Output('onReservationListChange') onReservationListChangeEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output('onReservationClick') onReservationClickEventEmitter: EventEmitter<ReservationModel> = new EventEmitter();
  reservationStatuses = ReservationStatus;
  loggedAsAdmin = false;
  loggedAsUser = false;

  constructor(private _adminReservationApiService: AdminReservationManagementApiService,
              private _reservationApiService: ReservationApiService,
              private _dialog: MatDialog,
              private _appContext: AppContextService,
              private _visitDetailsApiService: AdminVisitDetailsApiService) {
  }

  ngOnInit(): void {
    this.loggedAsAdmin = this._appContext.isLoggedAsAdmin();
    this.loggedAsUser = this._appContext.isLoggedAsUser();
  }

  removeReservation(value) {
    const dialogRef = this._dialog.open(ConfirmationPopup, {
      width: '400px',
      data: 'Czy na pewno chcesz usunąć termin wizyty?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._adminReservationApiService.deleteReservation(value.id).subscribe(() => {
          this.onReservationListChangeEventEmitter.emit();
        });
      }
    });
  }

  detailsClicked(reservation: ReservationModel) {
    const dialogRef = this._dialog.open(ReservationDetailsInfo, {
      width: '600px',
      data: reservation
    });

    dialogRef.afterClosed().subscribe();
  }

  addDetailsClicked(reservation: ReservationModel) {
    const dialogRef = this._dialog.open(FillReservationDetails, {
      width: '600px',
      data: reservation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._visitDetailsApiService.addVisitDetails(result, reservation.id).subscribe(() => this.onReservationListChangeEventEmitter.emit());
      }
    });
  }

  reservationClicked(reservation: ReservationModel) {
    this.onReservationClickEventEmitter.emit(reservation);
  }

  markAsCanceled(reservation: ReservationModel) {
    const dialogRef = this._dialog.open(ConfirmationPopup, {
      width: '480px',
      data: 'Czy na pewno chcesz zmienić status wizyty na anulowana?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._adminReservationApiService.changeReservationStatus(reservation.id, ReservationStatus.CANCELED).subscribe(() => {
          this.onReservationListChangeEventEmitter.emit();
        });
      }
    });
  }

  cancelReservation(reservation: ReservationModel) {
    const dialogRef = this._dialog.open(ConfirmationPopup, {
      width: '400px',
      data: 'Czy na pewno chcesz odwołać wizyte?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._reservationApiService.changeReservationStatus(reservation.id, ReservationStatus.AVAILABLE).subscribe(() => {
          this.onReservationListChangeEventEmitter.emit();
        });
      }
    });
  }

  onContactInfoClick(reservation: ReservationModel) {
    this.openContactInfoDialog(reservation.personalData);
  }

  private openContactInfoDialog(personalDataModel: PersonalDataModel): void {
    const dialogRef = this._dialog.open(ContactInfoDialog, {
      width: '350px',
      data: personalDataModel
    });
    dialogRef.afterClosed().subscribe();
  }

  getClassName(reservation: ReservationModel) {
    return ReservationUtils.getClassName(reservation);
  }
}

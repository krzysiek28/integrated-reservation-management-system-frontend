import {ReservationStatus} from './ReservationStatus';
import {UserModel} from './UserModel';
import {PersonalDataModel} from './PersonalDataModel';
import {VisitDetailsModel} from './VisitDetailsModel';

export class ReservationModel {
  id: number;
  date: Date;
  timeFrom: Date;
  timeTo: Date;
  status: ReservationStatus;
  comment: String;
  user: UserModel;
  visitDetails: VisitDetailsModel;
  personalData: PersonalDataModel;
}

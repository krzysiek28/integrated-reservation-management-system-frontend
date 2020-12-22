import {ReservationStatus} from '../../../../objects/models/ReservationStatus';

export class ReservationSearchRequest {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  reservationStatus: ReservationStatus;
}

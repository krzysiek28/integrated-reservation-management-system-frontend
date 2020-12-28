import {ReservationModel} from '../objects/models/ReservationModel';
import {ReservationStatus} from '../objects/models/ReservationStatus';

export class ReservationUtils {

  public static getClassName(reservation: ReservationModel) {
    switch (reservation.status) {
      case ReservationStatus.RESERVED: {
        return 'reserved';
      }
      case ReservationStatus.AVAILABLE: {
        return 'available';
      }
      case ReservationStatus.CANCELED: {
        return 'canceled';
      }
      case ReservationStatus.CLOSED: {
        return 'closed';
      }
      default: {
        return '';
      }
    }
  }
}

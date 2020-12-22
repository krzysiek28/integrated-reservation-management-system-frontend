import {Pipe, PipeTransform} from "@angular/core";
import {ReservationStatus} from "../objects/models/ReservationStatus";

@Pipe({
  name: 'transformReservationStatus'
})
export class ReservationStatusesPipe implements PipeTransform {

  transform(value: ReservationStatus): string {
    switch (value) {
      case ReservationStatus.RESERVED: {
        return "Zarezerwowana";
      }
      case ReservationStatus.AVAILABLE: {
        return "Dostępna"
      }
      case ReservationStatus.CANCELED: {
        return "Odwołana"
      }
      case ReservationStatus.CLOSED: {
        return "Zrealizowana"
      }
      default: {
        return "";
      }
    }
  }
}

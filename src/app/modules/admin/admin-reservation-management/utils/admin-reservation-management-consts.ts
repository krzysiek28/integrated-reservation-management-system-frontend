export class AdminReservationManagementConsts {

}

export class ReservationManagementControlNames {
  public static COST: string = 'cost';
  public static NOTE: string = 'note';
  public static DATE_FROM: string = 'dateFrom';
  public static DATE_TO: string = 'dateTo';
  public static DATE: string = 'date';
  public static TIME_FROM: string = 'timeFrom';
  public static TIME_TO: string = 'timeTo';
  public static VISIT_DURATION: string = 'visitDuration';
  public static BREAK_DURATION: string = 'breakDuration';
  public static VISIT_COUNT: string = 'visitCount';
  public static RESERVATION_STATUS: string = 'reservationStatus';
}

export class ReservationTimeStates {
  public static TIME_DURATION_STATES: string[] = [
    '15min', '30min', '45min', '1h', '10min', '20min', '40min', '50min',
    '1h 10min', '1h 15min', '1h 20min', '1h 30min', '1h 45min', '2h', '2h 30min', '3h'
  ];

  public static BREAK_DURATION_STATES: string[] = [
    '0min', '5min', '10min', '15min', '20min', '25min', '30min', '45min', '1h'
  ];
}

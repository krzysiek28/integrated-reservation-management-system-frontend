export class AppConsts {
  public static SERVER_BASIC_URL = 'http://localhost:9500';
  public static RESERVATION_API_PATH = '/reservationsApi';
  public static ADMIN_RESERVATION_MANAGEMENT_API_PATH = '/adminReservationsApi';
}

export enum ApplicationVariant {
  NO_CONTEXT, LOGGED_AS_USER, LOGGED_AS_ADMIN
}
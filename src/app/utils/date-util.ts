export class DateUtil {
  public static addDays(date: Date, days : number): Date{
    date.setDate(date.getDate() + days);
    return date;
  }

  public static subDays(date: Date, days : number): Date{
    date.setDate(date.getDate() - days);
    return date;
  }
}

export class DatesFormat {
  static userLocalFormat(date: string): string {
    const regexp: RegExp = /(\d{4})-(\d{2})-(\d{2})/;
    return date.replace(regexp, "$3.$2.$1");
  }
}

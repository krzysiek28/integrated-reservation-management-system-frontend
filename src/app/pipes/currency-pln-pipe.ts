import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyPln'
})
export class CurrencyPlnPipe implements PipeTransform {

  transform(amount: number): string {
    return amount + ' zł';
  }
}

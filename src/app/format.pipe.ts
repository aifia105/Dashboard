import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class Format implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000) {
      const formattedValue = (value / 1000).toFixed(1);
      return formattedValue + 'k';
    } else {
      return value.toString();
    }
  }
}
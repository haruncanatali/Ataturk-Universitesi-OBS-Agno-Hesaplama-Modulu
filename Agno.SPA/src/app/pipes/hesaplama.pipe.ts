import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hesaplama'
})
export class HesaplamaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

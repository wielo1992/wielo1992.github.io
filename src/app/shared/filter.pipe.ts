import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product-model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterString: string, propertyName: string) {
    const result: Product[] = [];
    if (!value || filterString === '' || propertyName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[propertyName]
          .trim()
          .toLowerCase()
          .includes(filterString.toLowerCase())
      ) {
        result.push(a);
      }
    });
    return result;
  }
}

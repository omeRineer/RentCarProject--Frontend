import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(value: Brand[], filterText:string): Brand[] {
    filterText=filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter(b=>b.brandName.toLocaleLowerCase().startsWith(filterText)!=false) : value
  }

}

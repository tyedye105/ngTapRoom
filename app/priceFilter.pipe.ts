import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "priceFilter",
  pure: true
})

export class PriceFilterPipe implements PipeTransform {
  transform(input:Keg[], priceLimit) {
    var output: Keg[] = [];
    for(var i=0; i<input.length; i++) {
      if (input[i].price <= priceLimit){
        output.push(input[i]);
      }
    }
    return output;
  }
}

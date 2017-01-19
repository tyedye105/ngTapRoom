import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "happyHour",
  pure: false
})

export class HappyHourPipe implements PipeTransform {
  transform(input:Keg[]) {
    var output: Keg[] = [];
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
      if (currentHour >= 12 && currentHour < 18){
        for(var i=0; i<input.length; i++) {
          var newKeg = new Keg(input[i].name, input[i].brewer, input[i].price-1, input[i].abv, input[i].pints);
          output.push(newKeg);
      }
    } else {
      output = input;
    }
    return output;
  }
}

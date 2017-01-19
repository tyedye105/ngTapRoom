import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-keg',
  template: `
  <button (click)="sellPint(childCurrentKeg)">Sell pint!</button>
  `
})


export class SellKegComponent{
  @Input() childCurrentKeg: Keg;
  @Output() saleSender = new EventEmitter();

  sellPint(clickedKeg){
    this.saleSender.emit(clickedKeg);
  }
}

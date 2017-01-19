import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-keg',
  template: `
  <div>
    <button class="btn form-control" (click)="sellBooze(1)">Pint!</button>
    <button class="btn form-control" (click)="sellBooze(2)"> Growler!</button>
    <button class="btn form-control" (click)="sellBooze(4)">Large Growler!</button>
  </div>
  `
})


export class SellKegComponent{
  @Input() childCurrentKeg: Keg;
  @Output() saleSender = new EventEmitter();

  sellBooze(amount){
    var boozeToSell = [];
    boozeToSell.push(amount, this.childCurrentKeg);
    this.saleSender.emit(boozeToSell);

  }
}

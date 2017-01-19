import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'sell-keg',
  template: `
  <button (click)="sellBooze(1)">Sell pint!</button>
  <button (click)="sellBooze(2)">Sell Growler!</button>
  <button (click)="sellBooze(4)">Sell Large Growler!</button>
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

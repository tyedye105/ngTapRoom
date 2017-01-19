import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'list-keg',
  template: `
  <label>Maximum price per pint:</label>
  <select (change)="updatePriceLimit($event.target.value)">
    <option value=5>$5</option>
    <option value=7.50>$7.50</option>
    <option value=10>$10</option>
    <option value=99 selected>No Limit</option>
  </select>
  <ul>
    <li *ngFor="let currentKeg of childKegList | priceFilter: priceLimit">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, <span [class]="abvWarning(currentKeg)">
    {{currentKeg.abv}}% ABV.</span> {{currentKeg.pints}} pints remaining</li>
  </ul>
  `

})


export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  priceLimit: number = 99;

  abvWarning(currentKeg) {
    if (currentKeg.abv >= 7) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }

  updatePriceLimit(limit) {
    this.priceLimit = limit;
  }
}

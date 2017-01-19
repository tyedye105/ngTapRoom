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
  <div class="empContainer">
    <div class="keg" *ngFor="let currentKeg of childKegList | happyHour | priceFilter : priceLimit"><h4>{{currentKeg.name}}, by {{currentKeg.brewer}}</h4>
    <h5>\${{currentKeg.price}} per pint</h5>
    <h5><span [class]="abvWarning(currentKeg)">
    {{currentKeg.abv}}% ABV.</span></h5>
    <p>{{currentKeg.pints}} pints remaining</p>
    </div>
  </div>
  `

})


export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  priceLimit: number = 99;

  abvWarning(currentKeg) {
    if (currentKeg.abv >= 7) {
      return "abvWarning";
    } else {
      return "" ;
    }
  }

  updatePriceLimit(limit) {
    this.priceLimit = limit;
  }
}

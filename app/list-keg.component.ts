import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'list-keg',
  template: `
  <h3 *ngIf ="employeePortal">Employee Portal:</h3>
  <label>Maximum price per pint:</label>
  <select (change)="updatePriceLimit($event.target.value)">
    <option value=5>$5</option>
    <option value=7.50>$7.50</option>
    <option value=10>$10</option>
    <option value=99 selected>No Limit</option>
  </select>
  <ul>
    <li [class]="kegChange(currentKeg)" *ngFor="let currentKeg of childKegList | priceFilter: priceLimit">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, <span [class]="abvWarning(currentKeg)">
    {{currentKeg.abv}}% ABV.</span> {{currentKeg.pints}} pints remaining <button *ngIf ="employeePortal" (click)="editKeg(currentKeg)">Edit Keg</button> <sell-keg [childCurrentKeg]="currentKeg" (saleSender)="sellPint($event)"></sell-keg></li>
  </ul>
  <button (click)="toggleEmployeeView()">Toggle View</button>
  `

})


export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  employeePortal: boolean = false;
  priceLimit: number = 99;


  editKeg(clickedKeg) {
    this.clickSender.emit(clickedKeg);
  }

  abvWarning(currentKeg) {
    if (currentKeg.abv >= 7) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }

  sellPint(soldKeg) {
    this.saleSender.emit(soldKeg);
  }

  toggleEmployeeView() {
    if(this.employeePortal === false) {
      this.employeePortal = true;
    } else {
      this.employeePortal = false;
    }
  }

  kegChange(currentKeg) {
    if (currentKeg.pints <= 10) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }

  updatePriceLimit(limit) {
    this.priceLimit = limit;
  }
}

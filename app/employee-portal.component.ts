import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'employee-portal',
  template: `
  <h3>Employee Portal:</h3>
  <ul>
    <li [class]="kegChange(currentKeg)" *ngFor="let currentKeg of empChildKegList">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, {{currentKeg.abv}}% ABV. {{currentKeg.pints}} pints remaining <button (click)="editKeg(currentKeg)">Edit Keg</button> <sell-keg [childCurrentKeg]="currentKeg" (saleSender)="sellPint($event)"></sell-keg></li>
  </ul>
  `
})

export class EmployeePortalComponent {
  @Input() empChildKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();

  editKeg(clickedKeg) {
    this.clickSender.emit(clickedKeg);
  }

  sellPint(soldKeg) {
    this.saleSender.emit(soldKeg);
  }

  kegChange(currentKeg) {
    if (currentKeg.pints <= 10) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }
}

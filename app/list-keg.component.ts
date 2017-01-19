import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'list-keg',
  template: `
  <h3 *ngIf ="employeePortal">Employee Portal:</h3>
  <ul>
    <li [class]="kegChange(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, <span [class]="abvWarning(currentKeg)">
    {{currentKeg.abv}}% ABV.</span> {{currentKeg.pints}} pints remaining <button *ngIf ="employeePortal" (click)="editKeg(currentKeg)">Edit Keg</button> <button *ngIf ="employeePortal" (click)="sellPint(currentKeg)">Sell pint!</button></li>
  </ul>
  <button (click)="toggleEmployeeView()">Toggle View</button>
  `

})


export class ListKegComponent {
  @Input() childKegList: Keg[];
  employeePortal: boolean = false;
  @Output() clickSender = new EventEmitter();


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
}

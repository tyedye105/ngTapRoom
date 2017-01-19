import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'employee-portal',
  template: `
  <h3>Employee Portal:</h3>
  <div class="empContainer">
    <div [class]="kegChange(currentKeg)" *ngFor="let currentKeg of empChildKegList">
      <div class="keg">
        <h4>{{currentKeg.name}}, by {{currentKeg.brewer}}</h4>
        <h5>\${{currentKeg.price}} per pint</h5>
        <p>{{currentKeg.pints}} pints remaining</p>
      </div>
      <div class="kegButtons">
        <button (click)="editKeg(currentKeg)">Edit Keg</button>
        <sell-keg  [childCurrentKeg]="currentKeg" (saleSender)="sellPint($event)"></sell-keg>
      </div>
    </div>
  </div>
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
      return "empKegChange";
    } else {
      return "empKeg" ;
    }
  }
}

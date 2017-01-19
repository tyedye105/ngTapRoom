import {Component, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component( {
  selector: 'new-keg',
  template: `
  <button class="btn" (click)="newKegForm()">Add New Keg</button>
  <div  *ngIf="newKeg">
    <div class="inputForm">
      <h3>New Keg</h3>
      <label>Beer name:</label>
      <input #newName>
      <label>Brewer:</label>
      <input #newBrewer>
      <label>Price:</label>
      <input #newPrice>
      <label>ABV:</label>
      <input #newAbv>
      <button class="btn" (click)="addKeg(newName.value, newBrewer.value, newPrice.value, newAbv.value)">Add Keg</button>
      <button class="btn" (click)="cancel()">Cancel</button>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  newKeg = null;

  newKegForm() {
    this.newKeg = true;
  }

  addKeg(name: string, brewer: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg (name, brewer, price, abv);
    this.newKegSender.emit(newKegToAdd);
    this.newKeg = null;
  }

  cancel() {
    this.newKeg = null;
  }

}

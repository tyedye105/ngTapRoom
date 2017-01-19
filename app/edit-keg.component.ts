import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div  *ngIf="childSelectedKeg">
    <h3>Edit {{childSelectedKeg.name}} by {{childSelectedKeg.brewer}}</h3>
    <label>Beer name:</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Brewer:</label>
    <input [(ngModel)]="childSelectedKeg.brewer">
    <label>Price:</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <label>ABV:</label>
    <input [(ngModel)]="childSelectedKeg.abv">
    <label>Pints Left:</label>
    <input [(ngModel)]="childSelectedKeg.pints">
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing() {
    this.finishedEditingSender.emit();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Weclome To the Tap Room! </h1>
    <h3>Currently on Tap:</h3>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, {{currentKeg.abv}}% ABV. {{currentKeg.pints}} pints remaining<button (click)="editKeg(currentKeg)">Edit Keg</button></li>
    </ul>
    <div  *ngIf="selectedKeg">
    <h3>Edit {{selectedKeg.name}} by {{selectedKeg.brewer}}</h3>
    <label>Beer name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label>Brewer:</label>
    <input [(ngModel)]="selectedKeg.brewer">
    <label>Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <label>ABV:</label>
    <input [(ngModel)]="selectedKeg.abv">
    <label>Pints Left:</label>
    <input [(ngModel)]="selectedKeg.pints">
    <button (click)="finishedEditing()">Done</button>
  </div>
  </div>
`
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("IPA", "Happy Brews", 5.00, 5.4),
    new Keg("Stout", "Unhappy Brews", 5.00, 6.4),
    new Keg("Blueberry Cider", "Blue's Brews", 6.00, 4.2)
  ]
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg=clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg=null;
  }
 }

export class Keg {
  public pints: number = 124;
  constructor(public name: string,public brewer: string,public price: number,public abv: number) { }
}

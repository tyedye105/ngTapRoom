import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Weclome To the Tap Room! </h1>
    <h3>Currently on Tap:</h3>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, <span [class]="abvWarning(currentKeg)">{{currentKeg.abv}}% ABV</span>. {{currentKeg.pints}} pints remaining</li>
    </ul>
    <hr>
    <h3>Employee Portal:</h3>
    <ul>
      <li [class]="kegChange(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.name}}, by {{currentKeg.brewer}}, \${{currentKeg.price}} per pint, {{currentKeg.abv}}% ABV. {{currentKeg.pints}} pints remaining <button (click)="editKeg(currentKeg)">Edit Keg</button> <button (click)="sellPint(currentKeg)">Sell pint!</button></li>
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
    <button (click)="newKegForm()">Add New Keg</button>
    <div  *ngIf="newKeg">
      <h3>New Keg</h3>
      <label>Beer name:</label>
      <input #newName>
      <label>Brewer:</label>
      <input #newBrewer>
      <label>Price:</label>
      <input #newPrice>
      <label>ABV:</label>
      <input #newAbv>
      <button (click)="addKeg(newName.value, newBrewer.value, newPrice.value, newAbv.value)">Add Keg</button>
    </div>
  </div>
`
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg("IPA", "Happy Brews", 5.00, 5.4),
    new Keg("Stout", "Unhappy Brews", 5.00, 6.4),
    new Keg("Blueberry Cider", "Blue's Brews", 6.00, 4.2),
    new Keg("Triple Imperial Barrel-aged Barley Wine", "Crazy Joe", 13, 19.7)
  ]
  selectedKeg = null;
  newKeg = null;

  kegChange(currentKeg) {
    if (currentKeg.pints <= 10) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }

  abvWarning(currentKeg) {
    if (currentKeg.abv >= 7) {
      return "bg-danger";
    } else {
      return "" ;
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg=clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg=null;
  }

  sellPint(clickedKeg){
  clickedKeg.pints = clickedKeg.pints - 1;
  }

  newKegForm() {
    this.newKeg = "go";
  }

  addKeg(name: string, brewer: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brewer, price, abv);
    this.kegs.push(newKegToAdd);
    this.newKeg = null;
  }
 }


export class Keg {
  public pints: number = 124;
  constructor(public name: string,public brewer: string,public price: number,public abv: number) { }
}

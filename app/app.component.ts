import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Weclome To the Tap Room! </h1>
    <h3>Currently on Tap:</h3>
    <list-keg [childKegList]="masterKegList" (clickSender)="editKeg($event)"></list-keg>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (finishedEditingSender)="finishedEditing()"></edit-keg>
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
  masterKegList: Keg[] = [
    new Keg("IPA", "Happy Brews", 5.00, 5.4),
    new Keg("Stout", "Unhappy Brews", 5.00, 6.4),
    new Keg("Blueberry Cider", "Blue's Brews", 6.00, 4.2),
    new Keg("Triple Imperial Barrel-aged Barley Wine", "Crazy Joe", 13, 19.7)
  ]
  selectedKeg = null;
  newKeg = null;


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
    this.masterKegList.push(newKegToAdd);
    this.newKeg = null;
  }
 }

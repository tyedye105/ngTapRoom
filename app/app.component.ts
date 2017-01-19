import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Weclome To the Tap Room! </h1>
    <h3>Currently on Tap:</h3>
    <list-keg [childKegList]="masterKegList"></list-keg>
    <hr>
    <employee-portal [empChildKegList]="masterKegList" (clickSender)="editKeg($event)" (saleSender)="sellKeg($event)"></employee-portal>
    <edit-keg [childSelectedKeg]="selectedKeg" (finishedEditingSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)='addKeg($event)'></new-keg>
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

  newKegForm() {
    this.newKeg = "go";
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild)
  }

  sellKeg(soldKeg) {
    soldKeg[1].pints = soldKeg[1].pints - soldKeg[0];
  }
 }

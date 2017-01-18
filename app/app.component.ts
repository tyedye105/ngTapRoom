import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Weclome To the Tap Room! </h1>
    <h3>{{firstKeg.name}}, {{firstKeg.brewer}}</h3>
  </div>
`
})

export class AppComponent {
  firstKeg: Keg = new Keg("IPA", "Happy Brews", 5.00, 5.4);
 }

export class Keg {
  public pints: number = 124;
  constructor(public name: string,public brewer: string,public price: number,public abv: number) { }
}

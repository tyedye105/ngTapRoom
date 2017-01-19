import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListKegComponent} from './list-keg.component';
import {EditKegComponent} from './edit-keg.component';
import{NewKegComponent} from './new-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  ListKegComponent,
                  EditKegComponent,
                  NewKegComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

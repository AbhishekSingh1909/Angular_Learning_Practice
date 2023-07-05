import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';

import { EvenComponent } from './Even/even.component';
import { OddComponent } from './Odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

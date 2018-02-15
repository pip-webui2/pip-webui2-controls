import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipSearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [
    PipSearchInputComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipSearchInputComponent
  ],
  providers: [],
})
export class PipSearchInputModule { }
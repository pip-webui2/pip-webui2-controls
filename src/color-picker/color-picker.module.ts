import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    PipColorPickerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipColorPickerComponent
  ],
  providers: [],
})
export class PipColorPickerModule { }
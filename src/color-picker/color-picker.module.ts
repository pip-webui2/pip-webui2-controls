import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material';

import { PipColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    PipColorPickerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonToggleModule
  ],
  exports: [
    PipColorPickerComponent
  ],
  providers: [],
})
export class PipColorPickerModule { }
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ColorPickerExampleComponent } from './color-picker-example.component';

import { PipColorPickerModule } from '../pip-webui2-controls';

@NgModule({
  declarations: [
    ColorPickerExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    PipColorPickerModule
  ],
  exports: [
    ColorPickerExampleComponent
  ],
  providers: [],
})
export class ColorPickerExampleModule { }
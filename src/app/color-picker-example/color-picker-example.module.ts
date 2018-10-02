import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipColorPickerModule } from 'pip-webui2-controls';

import { ColorPickerExampleComponent } from './color-picker-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipColorPickerModule
  ],
  declarations: [ColorPickerExampleComponent]
})
export class ColorPickerExampleModule { }

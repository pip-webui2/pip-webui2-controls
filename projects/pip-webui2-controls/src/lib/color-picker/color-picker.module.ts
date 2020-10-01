import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PipColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    PipColorPickerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipColorPickerComponent
  ],
  providers: [],
})
export class PipColorPickerModule { }

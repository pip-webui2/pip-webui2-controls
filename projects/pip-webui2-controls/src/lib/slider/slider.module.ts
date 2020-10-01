import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PipSliderComponent } from './slider.component';
import { PipSlideComponent } from './slide.component';
import { PipSliderButtonComponent } from './slider-button.component';

@NgModule({
  declarations: [
    PipSliderComponent,
    PipSlideComponent,
    PipSliderButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipSliderComponent,
    PipSlideComponent,
    PipSliderButtonComponent
  ],
  providers: [],
})
export class PipSliderModule { }

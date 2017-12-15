import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

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
    BrowserModule,
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
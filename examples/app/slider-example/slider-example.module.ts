import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatTabsModule } from '@angular/material';

import { SliderExampleComponent } from './slider-example.component';

import { PipSliderModule } from '../pip-webui2-controls';


@NgModule({
  declarations: [
    SliderExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,

    PipSliderModule
  ],
  exports: [
    SliderExampleComponent
  ],
  providers: [
  ],
})
export class SliderExampleModule { }
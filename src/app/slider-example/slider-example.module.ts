import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material';
import { PipSliderModule } from 'pip-webui2-controls';

import { SliderExampleComponent } from './slider-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,

    PipSliderModule
  ],
  declarations: [SliderExampleComponent]
})
export class SliderExampleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipSearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [
    PipSearchInputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipSearchInputComponent
  ],
  providers: [],
})
export class PipSearchInputModule { }

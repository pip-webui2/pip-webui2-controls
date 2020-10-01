import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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

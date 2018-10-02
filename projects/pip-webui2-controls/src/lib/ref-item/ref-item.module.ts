import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { PipRefItemComponent } from './ref-item.component';

@NgModule({
  declarations: [
    PipRefItemComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    PipRefItemComponent
  ],
  providers: [],
})
export class PipRefItemModule { }

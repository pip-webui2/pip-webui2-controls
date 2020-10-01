import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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

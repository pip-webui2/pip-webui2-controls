import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatIconModule, MatCheckboxModule } from '@angular/material';

import { PipCheckItemComponent } from './check-item.component';

@NgModule({
  declarations: [
    PipCheckItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
  ],
  exports: [
    PipCheckItemComponent
  ],
  providers: [],
})
export class PipCheckItemModule { }

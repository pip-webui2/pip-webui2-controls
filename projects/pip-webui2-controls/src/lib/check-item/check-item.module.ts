import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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

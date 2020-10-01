import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PipPictureModule } from 'pip-webui2-pictures';

import { PipRefItemComponent } from './ref-item.component';

@NgModule({
  declarations: [
    PipRefItemComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    PipPictureModule,
  ],
  exports: [
    PipRefItemComponent
  ],
  providers: [],
})
export class PipRefItemModule { }

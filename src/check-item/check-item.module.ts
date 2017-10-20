import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipCheckItemComponent } from './check-item.component';

@NgModule({
  declarations: [
    PipCheckItemComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    PipCheckItemComponent
  ],
  providers: [],
})
export class PipCheckItemModule { }

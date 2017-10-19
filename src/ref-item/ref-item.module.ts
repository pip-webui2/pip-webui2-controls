import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipRefItemComponent } from './ref-item.component';

@NgModule({
  declarations: [
    PipRefItemComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
    PipRefItemComponent
  ],
  providers: [],
})
export class PipRefItemModule { }

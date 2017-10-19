import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { PipRefItemComponent } from './ref-item.component';

@NgModule({
  declarations: [
    PipRefItemComponent
  ],
  imports: [
    MatListModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    PipRefItemComponent
  ],
  providers: [],
})
export class PipRefItemModule { }

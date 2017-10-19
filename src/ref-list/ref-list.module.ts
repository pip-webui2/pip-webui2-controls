import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { PipRefListComponent } from './ref-list.component';

@NgModule({
  declarations: [
    PipRefListComponent
  ],
  imports: [
    MatListModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    PipRefListComponent
  ],
  providers: [],
})
export class PipRefListModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { RefListExampleComponent } from './ref-list-example.component';




@NgModule({
  declarations: [
    RefListExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule

  ],
  exports: [
    RefListExampleComponent
  ],
  providers: [
  ],
})
export class RefListExampleModule { }
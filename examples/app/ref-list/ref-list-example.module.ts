import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';

import { RefListExampleComponent } from './ref-list-example.component';

import { PipRefListModule, PipRefItemModule } from '../pip-webui2-controls';


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
    MatInputModule,
    MatListModule,

    PipRefListModule,
    PipRefItemModule
  ],
  exports: [
    RefListExampleComponent
  ],
  providers: [
  ],
})
export class RefListExampleModule { }
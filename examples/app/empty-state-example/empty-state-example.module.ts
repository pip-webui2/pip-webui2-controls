import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';

import { EmptyStateExampleComponent } from './empty-state-example.component';

import { PipEmptyStateModule } from '../pip-webui2-controls';


@NgModule({
  declarations: [
    EmptyStateExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,

    PipEmptyStateModule
  ],
  exports: [
    EmptyStateExampleComponent
  ],
  providers: [
  ],
})
export class EmptyStateExampleModule { }
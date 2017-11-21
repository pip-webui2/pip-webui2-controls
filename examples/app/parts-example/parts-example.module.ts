import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatCheckboxModule, MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { PartsExampleComponent } from './parts-example.component';

import { PipPartModule } from '../pip-webui2-controls';


@NgModule({
  declarations: [
    PartsExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,

    PipPartModule
  ],
  exports: [
    PartsExampleComponent
  ],
  providers: [
  ],
})
export class PartsExampleModule { }
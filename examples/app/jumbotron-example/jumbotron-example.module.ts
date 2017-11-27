import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { JumbotronExampleComponent } from './jumbotron-example.component';

import { PipJumbotronModule } from '../pip-webui2-controls';


@NgModule({
  declarations: [
    JumbotronExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,

    PipJumbotronModule
  ],
  exports: [
    JumbotronExampleComponent
  ],
  providers: [
  ],
})
export class JumbotronExampleModule { }
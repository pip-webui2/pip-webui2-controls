import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatIconModule, MatTabsModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';

import { SearchInputExampleComponent } from './search-input-example.component';

import { PipSearchInputModule } from '../pip-webui2-controls';


@NgModule({
  declarations: [
    SearchInputExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule,

    PipSearchInputModule
  ],
  exports: [
    SearchInputExampleComponent
  ],
  providers: [
  ],
})
export class SearchInputExampleModule { }
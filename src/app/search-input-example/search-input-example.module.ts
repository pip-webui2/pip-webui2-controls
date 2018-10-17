import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatAutocompleteModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipSearchInputModule } from 'pip-webui2-controls';

import { SearchInputExampleComponent } from './search-input-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule,
    TranslateModule,

    PipSearchInputModule
  ],
  declarations: [SearchInputExampleComponent]
})
export class SearchInputExampleModule { }

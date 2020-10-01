import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipSelectableModule } from 'pip-webui2-behaviors';
import { PipRefItemModule } from 'pip-webui2-controls';

import { RefListExampleComponent } from './ref-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,

    PipRefItemModule,
    PipSelectableModule
  ],
  declarations: [RefListExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RefListExampleModule { }

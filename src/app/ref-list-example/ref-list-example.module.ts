import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { PipSelectedModule } from 'pip-webui2-behaviors';
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
    PipSelectedModule
  ],
  declarations: [RefListExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RefListExampleModule { }

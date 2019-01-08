import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { PipSelectedModule } from 'pip-webui2-behaviors';
import { PipRefItemModule } from 'pip-webui2-controls';

import { RefListExampleComponent } from './ref-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,

    PipRefItemModule,
    PipSelectedModule
  ],
  declarations: [RefListExampleComponent]
})
export class RefListExampleModule { }

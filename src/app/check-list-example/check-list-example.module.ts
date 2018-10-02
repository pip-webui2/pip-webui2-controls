import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { PipCheckItemModule } from 'pip-webui2-controls';

import { CheckListExampleComponent } from './check-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,

    PipCheckItemModule
  ],
  declarations: [CheckListExampleComponent]
})
export class CheckListExampleModule { }

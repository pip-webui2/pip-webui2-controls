import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatCheckboxModule, MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PipPartModule } from 'pip-webui2-controls';

import { PipPartDirective } from './parts-name-example.directive';
import { PartsExampleComponent } from './parts-example.component';

@NgModule({
  imports: [
    CommonModule,
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
  declarations: [PartsExampleComponent, PipPartDirective]
})
export class PartsExampleModule { }

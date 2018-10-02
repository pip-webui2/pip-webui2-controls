import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipEmptyStateModule } from 'pip-webui2-controls';

import { EmptyStateExampleComponent } from './empty-state-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipEmptyStateModule
  ],
  declarations: [EmptyStateExampleComponent]
})
export class EmptyStateExampleModule { }

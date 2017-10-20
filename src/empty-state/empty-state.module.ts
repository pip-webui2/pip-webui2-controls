import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipEmptyStateComponent } from './empty-state.component';
import { PipEmptyStateTitleComponent } from './empty-state-title.component';
import { PipEmptyStateActionsComponent } from './empty-state-actions.component';

@NgModule({
  declarations: [
    PipEmptyStateComponent,
    PipEmptyStateTitleComponent,
    PipEmptyStateActionsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  exports: [
    PipEmptyStateComponent,
    PipEmptyStateTitleComponent,
    PipEmptyStateActionsComponent
  ],
  providers: [],
})
export class PipEmptyStateModule { }
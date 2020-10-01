import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

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
    CommonModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  exports: [
    PipEmptyStateComponent,
    PipEmptyStateTitleComponent,
    PipEmptyStateActionsComponent
  ],
  providers: [],
})
export class PipEmptyStateModule { }

import { NgModule } from '@angular/core';

import { PipPartService } from './shared/part.service';
import { PipPartVisibilityDirective } from './part-visibility.directive';

@NgModule({
  declarations: [
    PipPartVisibilityDirective
  ],
  imports: [],
  exports: [
    PipPartVisibilityDirective
  ],
  providers: [
    PipPartService
  ]
})
export class PipPartModule { }

import { NgModule } from '@angular/core';

import { PipPartService } from './shared/part.service';
import { PipPartDirective } from './part.directive';

@NgModule({
  declarations: [
    PipPartDirective
  ],
  imports: [
    
  ],
  exports: [  
    PipPartDirective
  ],
  providers: [
    PipPartService
  ]
})
export class PipPartModule { }
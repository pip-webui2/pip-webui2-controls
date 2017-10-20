import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatListModule} from '@angular/material';

import { PipCheckItemModule } from '../pip-webui2-controls';

import { CheckListExampleComponent } from './check-list-example.component';


@NgModule({
  declarations: [
    CheckListExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,

    PipCheckItemModule

  ],
  exports: [
    CheckListExampleComponent
  ],
  providers: [
  ],
})
export class CheckListExampleModule { }
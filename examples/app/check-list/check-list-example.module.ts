import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

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
    MatButtonModule,
    MatInputModule

  ],
  exports: [
    CheckListExampleComponent
  ],
  providers: [
  ],
})
export class CheckListExampleModule { }
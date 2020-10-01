import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PipJumbotronComponent } from './jumbotron.component';
import { PipJumbotronPictureComponent } from './jumbotron-picture.component';
import { PipJumbotronContentComponent } from './jumbotron-content.component';
import { PipJumbotronItemComponent } from './jumbotron-item.component';

@NgModule({
  declarations: [
    PipJumbotronComponent,
    PipJumbotronPictureComponent,
    PipJumbotronContentComponent,
    PipJumbotronItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PipJumbotronComponent,
    PipJumbotronPictureComponent,
    PipJumbotronContentComponent,
    PipJumbotronItemComponent
  ],
  providers: [],
})
export class PipJumbotronModule { }

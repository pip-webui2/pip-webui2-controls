import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckListExampleModule } from './check-list-example/check-list-example.module';
import { ColorPickerExampleModule } from './color-picker-example/color-picker-example.module';
import { EmptyStateExampleModule } from './empty-state-example/empty-state-example.module';
import { JumbotronExampleModule } from './jumbotron-example/jumbotron-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { PartsExampleModule } from './parts-example/parts-example.module';
import { RefListExampleModule } from './ref-list-example/ref-list-example.module';
import { SearchInputExampleModule } from './search-input-example/search-input-example.module';
import { SliderExampleModule } from './slider-example/slider-example.module';

export const CustomBreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: [...DEFAULT_BREAKPOINTS],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule.forRoot(),

    PipThemesModule,

    AppRoutingModule,
    CheckListExampleModule,
    ColorPickerExampleModule,
    EmptyStateExampleModule,
    JumbotronExampleModule,
    ExamplesListModule,
    PartsExampleModule,
    RefListExampleModule,
    SearchInputExampleModule,
    SliderExampleModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

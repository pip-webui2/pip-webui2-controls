import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { PipThemesModule, pipWebUI2ThemesList } from 'pip-webui2-themes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListExampleModule } from './check-list-example/check-list-example.module';
import { ColorPickerExampleModule } from './color-picker-example/color-picker-example.module';
import { EmptyStateExampleModule } from './empty-state-example/empty-state-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { JumbotronExampleModule } from './jumbotron-example/jumbotron-example.module';
import { PartsExampleModule } from './parts-example/parts-example.module';
import { RefListExampleModule } from './ref-list-example/ref-list-example.module';
import { SearchInputExampleModule } from './search-input-example/search-input-example.module';
import { SliderExampleModule } from './slider-example/slider-example.module';

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

    PipThemesModule.withConfig({
      themes: pipWebUI2ThemesList
    }),

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

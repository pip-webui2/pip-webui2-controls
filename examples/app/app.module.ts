import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { ExampleListModule } from './examples-list/examples-list.module';

import { RefListExampleModule } from './ref-list/ref-list-example.module';
import { RefListExampleComponent } from './ref-list/ref-list-example.component';

import { CheckListExampleModule } from './check-list/check-list-example.module';
import { CheckListExampleComponent } from './check-list/check-list-example.component'; 

import { ColorPickerExampleModule } from './color-picker-example/color-picker-example.module';
import { ColorPickerExampleComponent } from './color-picker-example/color-picker-example.component';

import { EmptyStateExampleModule } from './empty-state-example/empty-state-example.module';
import { EmptyStateExampleComponent } from './empty-state-example/empty-state-example.component';

import { PartsExampleModule } from './parts-example/parts-example.module';
import { PartsExampleComponent } from './parts-example/parts-example.component';

import { JumbotronExampleModule } from './jumbotron-example/jumbotron-example.module';
import { JumbotronExampleComponent } from './jumbotron-example/jumbotron-example.component';

import { SliderExampleModule } from './slider-example/slider-example.module';
import { SliderExampleComponent } from './slider-example/slider-example.component';

import { SearchInputExampleModule } from './search-input-example/search-input-example.module';
import { SearchInputExampleComponent } from './search-input-example/search-input-example.component';

const appRoutes: Routes = [
  { path: 'ref_list', component: RefListExampleComponent },
  { path: 'check_list', component: CheckListExampleComponent },
  { path: 'color_picker', component: ColorPickerExampleComponent },
  { path: 'empty_state', component: EmptyStateExampleComponent },
  { path: 'parts', component: PartsExampleComponent },
  { path: 'jumbotron', component: JumbotronExampleComponent },
  { path: 'slider', component: SliderExampleComponent },
  { path: 'search_input', component: SearchInputExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'ref_list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TranslateModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    PipThemesModule,

    
    ExampleListModule,
    RefListExampleModule,
    CheckListExampleModule,
    ColorPickerExampleModule,
    EmptyStateExampleModule,
    PartsExampleModule,
    JumbotronExampleModule,
    SliderExampleModule,
    SearchInputExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
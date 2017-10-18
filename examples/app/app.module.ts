import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipTestModule } from './pip-webui2-controls';

import { AppComponent } from './app.component';
import { ExampleListModule } from './examples-list/examples-list.module';
import { RefListExampleModule } from './ref-list/ref-list-example.module';
import { RefListExampleComponent } from './ref-list/ref-list-example.component';

const appRoutes: Routes = [
  { path: 'ref-list', component: RefListExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'ref-list' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    ExampleListModule,
    RefListExampleModule,

    PipTestModule,
    
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
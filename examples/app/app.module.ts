import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipTestModule } from './pip-webui2-controls';

import { AppComponent } from './app.component';
import { ExampleListModule } from './examples-list/examples-list.module';

import { RefListExampleModule } from './ref-list/ref-list-example.module';
import { RefListExampleComponent } from './ref-list/ref-list-example.component';

import { CheckListExampleModule } from './check-list/check-list-example.module';
import { CheckListExampleComponent } from './check-list/check-list-example.component'; 

const appRoutes: Routes = [
  { path: 'ref-list', component: RefListExampleComponent },
  { path: 'check-list', component: CheckListExampleComponent },
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
    CheckListExampleModule,

    PipTestModule,
    
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
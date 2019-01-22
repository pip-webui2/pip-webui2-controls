import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckListExampleComponent } from './check-list-example/check-list-example.component';
import { ColorPickerExampleComponent } from './color-picker-example/color-picker-example.component';
import { EmptyStateExampleComponent } from './empty-state-example/empty-state-example.component';
import { JumbotronExampleComponent } from './jumbotron-example/jumbotron-example.component';
import { PartsExampleComponent } from './parts-example/parts-example.component';
import { RefListExampleComponent } from './ref-list-example/ref-list-example.component';
import { SearchInputExampleComponent } from './search-input-example/search-input-example.component';
import { SliderExampleComponent } from './slider-example/slider-example.component';

const appRoutes: Routes = [
    { path: 'ref_list', component: RefListExampleComponent },
    { path: 'check_list', component: CheckListExampleComponent },
    { path: 'color_picker', component: ColorPickerExampleComponent },
    { path: 'empty_state', component: EmptyStateExampleComponent },
    { path: 'parts', component: PartsExampleComponent },
    { path: 'jumbotron', component: JumbotronExampleComponent },
    { path: 'slider', component: SliderExampleComponent },
    { path: 'search_input', component: SearchInputExampleComponent },
    { path: '**', redirectTo: 'ref_list' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

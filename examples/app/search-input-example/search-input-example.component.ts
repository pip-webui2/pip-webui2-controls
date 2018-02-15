import { Component } from '@angular/core';


@Component({
    selector: 'search-input-example',
    templateUrl: './search-input-example.component.html',
    // styleUrls: ['./search-input-example.component.scss']
})
export class SearchInputExampleComponent {
    constructor() { }

    options = [
        'One',
        'Two',
        'Three'
    ];
}

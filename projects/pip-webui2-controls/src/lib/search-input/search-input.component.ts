import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'pip-search-input',
    template: '<ng-content></ng-content>',
    styleUrls: ['./search-input.component.scss']
})
export class PipSearchInputComponent {

    public isFirst = true;
    public isLast = false;
    @HostBinding('class.pip-search-input') get classPipSearchInput() { return true; }

    constructor(    ) {    }
}

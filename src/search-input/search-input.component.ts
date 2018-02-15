import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-search-input',
    template: '<ng-content></ng-content>',
    styleUrls: ['./search-input.component.scss']
})
export class PipSearchInputComponent {

    public isFirst: boolean = true;
    public isLast: boolean = false;
    private _refreshIntervalId: any = null;
    private _autoSlide: boolean = true;

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-search-input', true);
     }
}
import { Component, Renderer, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
    selector: 'pip-slide',
    template: '<ng-content></ng-content>',
    styleUrls: ['./slide.component.scss']
})
export class PipSlideComponent implements OnInit, AfterContentInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        this.renderer.setElementClass(this.elRef.nativeElement, 'pip-slide', true);
    }

    ngAfterContentInit() {

    }

    public show() {
        this.elRef.nativeElement.classList.add('show');
    }

    public hide() {
        this.elRef.nativeElement.classList.remove('show');
    }
}

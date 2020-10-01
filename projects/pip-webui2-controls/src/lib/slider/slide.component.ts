import { Component, ElementRef, OnInit, AfterContentInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-slide',
    template: '<ng-content></ng-content>',
    styleUrls: ['./slide.component.scss']
})
export class PipSlideComponent implements OnInit, AfterContentInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        this.renderer.addClass(this.elRef.nativeElement, 'pip-slide');
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

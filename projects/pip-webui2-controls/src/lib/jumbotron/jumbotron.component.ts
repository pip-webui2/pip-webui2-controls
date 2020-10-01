import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-jumbotron',
    template: '<ng-content></ng-content>',
    styleUrls: ['./jumbotron.component.scss']
})
export class PipJumbotronComponent implements OnInit {
    ngOnInit() { }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-jumbotron');
    }
}

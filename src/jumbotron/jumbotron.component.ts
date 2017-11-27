import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
	selector: 'pip-jumbotron',
	template: '<ng-content></ng-content>',
	styleUrls: ['./jumbotron.component.scss']
})
export class PipJumbotronComponent implements OnInit {
    ngOnInit() { }
    
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-jumbotron', true);
    }
}
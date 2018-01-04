import { Component, QueryList, Renderer, ElementRef, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatButton } from '@angular/material';

@Component({
	selector: 'pip-slide',
	template: '<ng-content></ng-content>',
	styleUrls: ['./slide.component.scss']
})
export class PipSlideComponent implements OnInit, AfterContentInit  {		
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
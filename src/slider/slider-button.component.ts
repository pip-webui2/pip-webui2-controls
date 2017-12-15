import * as _ from 'lodash';
import { Renderer, ElementRef, Component, QueryList, OnInit, AfterContentInit, Input, Output, EventEmitter, ContentChildren, Host } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatButton } from '@angular/material';
import { PipSliderComponent } from './slider.component';

@Component({
	selector: 'pip-slider-button',
	template: '<button mat-icon-button [disabled]="disabled" (click)="click()"><mat-icon>{{ icon }}</mat-icon></button>',
    styleUrls: ['./slider-button.component.scss']
})
export class PipSliderButtonComponent implements OnInit {		
    @Input('direction') set dir(direction: string) {
        this.direction = direction;
        if (direction == 'forward') {
            this.icon = 'chevron_right';
            this.elRef.nativeElement.classList.remove('backward');
            this.renderer.setElementClass(this.elRef.nativeElement, 'forward', true);
        } else {
            this.icon = 'chevron_left';
            this.elRef.nativeElement.classList.remove('forward');
            this.renderer.setElementClass(this.elRef.nativeElement, 'backward', true);
        }
    }
    @Input() disabled: boolean = false;
    @Input() slider: PipSliderComponent = null;
    @Input() icon: string = 'chevron_right';
    public direction: string = 'forward';

    private parentSlider: PipSliderComponent = null;
    
    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        @Host() pSlider: PipSliderComponent
    ) { 
        this.renderer.setElementClass(this.elRef.nativeElement, 'forward', true);
        if (pSlider instanceof PipSliderComponent) this.parentSlider = pSlider;
    }

    ngOnInit() { }

    click() {
        this.direction == 'forward' ? this.currentSlider.nextSlide() : this.currentSlider.prevSlide();
    }

    private get currentSlider(): PipSliderComponent {
        return this.slider || this.parentSlider;
    }

}
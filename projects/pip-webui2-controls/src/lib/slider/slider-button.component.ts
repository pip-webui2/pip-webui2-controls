import { ElementRef, Component, OnInit, Input, Host, Renderer2 } from '@angular/core';
import { PipSliderComponent } from './slider.component';

@Component({
    selector: 'pip-slider-button',
    template: '<button mat-icon-button [disabled]="disabled" (click)="click()"><mat-icon>{{ icon }}</mat-icon></button>',
    styleUrls: ['./slider-button.component.scss']
})
export class PipSliderButtonComponent implements OnInit {
    @Input('direction') set dir(direction: string) {
        this.direction = direction;
        if (direction === 'forward') {
            this.icon = 'chevron_right';
            this.elRef.nativeElement.classList.remove('backward');
            this.renderer.addClass(this.elRef.nativeElement, 'forward');
        } else {
            this.icon = 'chevron_left';
            this.elRef.nativeElement.classList.remove('forward');
            this.renderer.addClass(this.elRef.nativeElement, 'backward');
        }
    }
    @Input() disabled = false;
    @Input() slider: PipSliderComponent = null;
    @Input() icon = 'chevron_right';
    public direction = 'forward';

    private parentSlider: PipSliderComponent = null;

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef,
        @Host() pSlider: PipSliderComponent
    ) {
        this.renderer.addClass(this.elRef.nativeElement, 'forward');
        if (pSlider instanceof PipSliderComponent) { this.parentSlider = pSlider; }
    }

    ngOnInit() { }

    click() {
        this.direction === 'forward' ? this.currentSlider.nextSlide() : this.currentSlider.prevSlide();
    }

    private get currentSlider(): PipSliderComponent {
        return this.slider || this.parentSlider;
    }
}

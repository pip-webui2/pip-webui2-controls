import { Component, QueryList, OnInit, AfterContentInit, Input, ContentChildren } from '@angular/core';
import { PipSlideComponent } from './slide.component';

@Component({
    selector: 'pip-slider',
    template: '<ng-content></ng-content>',
    styleUrls: ['./slider.component.scss']
})
export class PipSliderComponent implements OnInit, AfterContentInit {
    @ContentChildren(PipSlideComponent) slides: QueryList<PipSlideComponent>;

    @Input() interval = 2000;
    @Input() public slideIndex = 0;
    @Input('autoSlide') set auto(auto: boolean) {
        this._autoSlide = auto;
        this._autoSlide ? this.startInterval() : this.stopInterval();
    }

    public isFirst = true;
    public isLast = false;
    private _refreshIntervalId: any = null;
    private _autoSlide = true;

    ngOnInit() {
        if (this._autoSlide) { this.startInterval(); }
    }

    ngAfterContentInit() {
        if (this.slides.length > 0) { this.slides.toArray()[0].show(); }
        if (this.slides.length < 2) { this.stopInterval(); }
    }

    public nextSlide() {
        if (this.slides.length > 0) {
            this.slides.toArray()[this.slideIndex].hide();
            this.slideIndex = this.slideIndex + 1 >= this.slides.length ? 0 : this.slideIndex + 1;
            this.slides.toArray()[this.slideIndex].show();
            this.setFirstAndLast();
            this.restartInterval();
        }
    }

    public prevSlide() {
        if (this.slides.length > 0) {
            this.slides.toArray()[this.slideIndex].hide();
            this.slideIndex = this.slideIndex - 1 < 0 ? this.slides.length - 1 : this.slideIndex - 1;
            this.slides.toArray()[this.slideIndex].show();
            this.setFirstAndLast();
            this.restartInterval();
        }
    }

    public toSlide(slideNumber: number) {
        if (slideNumber > -1 && slideNumber < this.slides.length) {
            this.slides.toArray()[this.slideIndex].hide();
            this.slideIndex = slideNumber;
            this.slides.toArray()[this.slideIndex].show();
            this.setFirstAndLast();
            this.restartInterval();
        }
    }

    public startInterval() {
        this._refreshIntervalId = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }

    public stopInterval() {
        clearInterval(this._refreshIntervalId);
    }

    public restartInterval() {
        this.stopInterval();
        this.startInterval();
    }

    private setFirstAndLast() {
        this.isFirst = this.slideIndex === 0;
        this.isLast = this.slideIndex === this.slides.length - 1;
    }
}

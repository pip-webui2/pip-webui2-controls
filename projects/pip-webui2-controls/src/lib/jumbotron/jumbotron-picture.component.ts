import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-jumbotron-picture',
    template: '<img src="{{ srcDark || src }}" alt="{{ alt || src }}">',
    styleUrls: ['./jumbotron-picture.component.scss']
})
export class PipJumbotronPictureComponent implements OnInit, AfterViewInit {

    private initialized = false;
    private runAfterInit: (() => void)[] = [];

    @Input() public src: string;
    @Input() public srcDark: string;
    @Input() public alt: string;
    @Input() public set width(width: string | number) {
        this.run(() => {
            this.elRef.nativeElement.getElementsByTagName('img')[0].setAttribute('width', width);
        });
    }
    @Input() public set height(height: string | number) {
        this.run(() => {
            this.elRef.nativeElement.getElementsByTagName('img')[0].setAttribute('height', height);
        });
    }

    ngOnInit() { }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-jumbotron-picture');
    }

    ngAfterViewInit(): void {
        this.initialized = true;
        this.runAfterInit.forEach(f => f());
    }

    private run(f: () => void): void {
        if (this.initialized) {
            f();
        } else {
            this.runAfterInit.push(f);
        }
    }
}

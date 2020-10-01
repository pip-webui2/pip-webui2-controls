import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-jumbotron-content',
    templateUrl: 'jumbotron-content.component.html',
    styleUrls: ['./jumbotron-content.component.scss']
})
export class PipJumbotronContentComponent implements OnInit {
    @Input() public title: string;
    @Input() public icon: string;

    ngOnInit() { }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-jumbotron-content');
    }
}

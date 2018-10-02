import { Component, OnInit, Renderer, ElementRef, Input } from '@angular/core';

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
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-jumbotron-content', true);
    }
}

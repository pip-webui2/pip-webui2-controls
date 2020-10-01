import { Component, OnInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-jumbotron-item',
    templateUrl: 'jumbotron-item.component.html',
    styleUrls: ['./jumbotron-item.component.scss']
})
export class PipJumbotronItemComponent implements OnInit {
    @Input() public item: any;

    ngOnInit() { }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-jumbotron-item');
    }
}

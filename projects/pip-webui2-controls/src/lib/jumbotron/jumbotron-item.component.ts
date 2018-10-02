import { Component, OnInit, Renderer, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'pip-jumbotron-item',
    templateUrl: 'jumbotron-item.component.html',
    styleUrls: ['./jumbotron-item.component.scss']
})
export class PipJumbotronItemComponent implements OnInit {
    @Input() public item: any;

    ngOnInit() { }

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-jumbotron-item', true);
    }
}

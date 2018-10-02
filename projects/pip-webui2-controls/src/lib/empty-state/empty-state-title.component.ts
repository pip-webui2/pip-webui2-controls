import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pip-empty-state-title',
    templateUrl: './empty-state-title.component.html',
    styleUrls: ['./empty-state-title.component.scss']
})
export class PipEmptyStateTitleComponent implements OnInit {
    @Input() imageUrl: string;
    @Input() imageAlt: string;
    @Input() text: string;
    @Input() subText: string;

    ngOnInit() { }
}

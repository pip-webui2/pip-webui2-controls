import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.scss']
})
export class PipRefListComponent {
    @Input() text: string = 'This is a ref list component';
    @Output() event = new EventEmitter();

    public constructor() {}

    public onClick(): void {
        this.event.emit(this.text);
    }
}

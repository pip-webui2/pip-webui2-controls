import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-ref-item',
  templateUrl: './ref-item.component.html',
  styleUrls: ['./ref-item.component.scss']
})
export class PipRefItemComponent {
    @Input()  id: string;
    @Input()  img: string;
    @Input()  title: string;
    @Input()  subtitle: string;
    @Input()  subtitleIcon: string;
    @Input()  textBold: string;
    @Input()  text: string;
    @Input()  tag: string;
    @Input()  alt: string;

    @Output() select = new EventEmitter();

    public constructor() {}

    public onSelect() {
        this.select.emit(this.id);
    }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-ref-item',
  templateUrl: './ref-item.component.html',
  styleUrls: ['./ref-item.component.scss']
})
export class PipRefItemComponent {
    public typesOfShoes: string[] = [
        'a', 'b', 'd'
    ];
    public constructor() {}
}

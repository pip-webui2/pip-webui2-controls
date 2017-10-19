import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.scss']
})
export class PipRefListComponent {
    public typesOfShoes: string[] = [
        'a', 'b', 'd'
    ];
    public constructor() {}
}

import { Component } from '@angular/core';


@Component({
    selector: 'slider-example',
    templateUrl: './slider-example.component.html',
    styleUrls: ['./slider-example.component.scss']
})
export class SliderExampleComponent {
    constructor() { }

    public slides = [
        './assets/boy.png',
        './assets/girl.png',
        './assets/boy2.png',
        './assets/girl2.png'
    ];

}

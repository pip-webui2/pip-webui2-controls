import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-example',
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.scss']
})
export class SliderExampleComponent implements OnInit {

  public slides = [
    './assets/boy.png',
    './assets/girl.png',
    './assets/boy2.png',
    './assets/girl2.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}

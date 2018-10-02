import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-example',
  templateUrl: './color-picker-example.component.html',
  styleUrls: ['./color-picker-example.component.scss']
})
export class ColorPickerExampleComponent implements OnInit {

  public colors: string[] = ['green', 'black', 'red', 'yellow', 'cyan', 'grey'];
  public color = 'red';
  public colorChanged: Function = (color) => {
    this.color = color;
  }

  ngOnInit() { }

}

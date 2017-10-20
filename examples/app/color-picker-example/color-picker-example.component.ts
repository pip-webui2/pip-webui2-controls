import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'color-picker-example',
	templateUrl: 'color-picker-example.component.html'
})

export class ColorPickerExampleComponent implements OnInit {
	public colors: string[] = ['green', 'black', 'red', 'yellow', 'cyan', 'grey'];
	public color: string = 'red';	
	public colorChanged: Function = (color) => {
		this.color = color;
	}

	ngOnInit() { }
}
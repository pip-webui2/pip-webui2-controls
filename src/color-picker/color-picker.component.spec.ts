import { TestBed, inject } from '@angular/core/testing';

import { ColorPickerComponent } from './color-picker.component';

describe('a color-picker component', () => {
	let component: ColorPickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ColorPickerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ColorPickerComponent], (ColorPickerComponent) => {
		component = ColorPickerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
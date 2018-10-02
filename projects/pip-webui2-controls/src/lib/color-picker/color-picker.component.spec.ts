import { TestBed, inject } from '@angular/core/testing';

import { PipColorPickerComponent } from './color-picker.component';

describe('a color-picker component', () => {
	let component: PipColorPickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipColorPickerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipColorPickerComponent], (ColorPickerComponent) => {
		component = ColorPickerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
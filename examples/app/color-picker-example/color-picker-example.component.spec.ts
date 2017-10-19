import { TestBed, inject } from '@angular/core/testing';

import { ColorPickerExampleComponent } from './color-picker-example.component';

describe('a color-picker-example component', () => {
	let component: ColorPickerExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ColorPickerExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ColorPickerExampleComponent], (ColorPickerExampleComponent) => {
		component = ColorPickerExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
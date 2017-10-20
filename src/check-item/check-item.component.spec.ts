import { TestBed, inject } from '@angular/core/testing';

import { PipCheckItemComponent } from './check-item.component';

describe('a pip-ref-item component', () => {
	let component: PipCheckItemComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipCheckItemComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipCheckItemComponent], (PipCheckItemComponent) => {
		component = PipCheckItemComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
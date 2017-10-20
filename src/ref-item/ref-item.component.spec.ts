import { TestBed, inject } from '@angular/core/testing';

import { PipRefItemComponent } from './ref-item.component';

describe('a pip-ref-item component', () => {
	let component: PipRefItemComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipRefItemComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipRefItemComponent], (PipRefItemComponent) => {
		component = PipRefItemComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
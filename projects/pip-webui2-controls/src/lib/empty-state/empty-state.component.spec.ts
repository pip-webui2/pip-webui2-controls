import { TestBed, inject } from '@angular/core/testing';

import { PipEmptyStateComponent } from './empty-state.component';

describe('a empty-state component', () => {
	let component: PipEmptyStateComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipEmptyStateComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipEmptyStateComponent], (PipEmptyStateComponent) => {
		component = PipEmptyStateComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
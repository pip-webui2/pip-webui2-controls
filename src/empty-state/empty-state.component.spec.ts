import { TestBed, inject } from '@angular/core/testing';

import { EmptyStateComponent } from './empty-state.component';

describe('a empty-state component', () => {
	let component: EmptyStateComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EmptyStateComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EmptyStateComponent], (EmptyStateComponent) => {
		component = EmptyStateComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
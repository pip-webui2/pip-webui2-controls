import { TestBed, inject } from '@angular/core/testing';

import { EmptyStateExampleComponent } from './empty-state-example.component';

describe('a empty-state-example component', () => {
	let component: EmptyStateExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EmptyStateExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EmptyStateExampleComponent], (EmptyStateExampleComponent) => {
		component = EmptyStateExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
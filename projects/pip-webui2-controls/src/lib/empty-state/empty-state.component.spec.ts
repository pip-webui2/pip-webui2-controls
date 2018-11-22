import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PipEmptyStateComponent } from './empty-state.component';

describe('a pip-empty-state component', () => {
    let component: PipEmptyStateComponent;
    let fixture: ComponentFixture<PipEmptyStateComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipEmptyStateComponent
            ]
        });
        fixture = TestBed.createComponent(PipEmptyStateComponent);
        component = fixture.componentInstance;
    });

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});

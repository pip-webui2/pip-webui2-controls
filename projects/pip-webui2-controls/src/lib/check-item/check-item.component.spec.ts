import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { PipCheckItemComponent } from './check-item.component';

describe('a pip-check-item component', () => {
    let component: PipCheckItemComponent;
    let fixture: ComponentFixture<PipCheckItemComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PipCheckItemComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(PipCheckItemComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipCheckItemComponent], (CheckItemComponent) => {
    //     component = CheckItemComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});

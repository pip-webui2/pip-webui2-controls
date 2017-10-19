import { TestBed, async } from '@angular/core/testing';

import { PipRefListComponent } from './ref-list.component';

describe('PipRefListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipRefListComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PipRefListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});

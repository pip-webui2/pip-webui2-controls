import { TestBed, async } from '@angular/core/testing';

import { PipRefItemComponent } from './ref-item.component';

describe('PipRefItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipRefItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PipRefItemComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});

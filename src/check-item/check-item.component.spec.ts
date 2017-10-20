import { TestBed, async } from '@angular/core/testing';

import { PipCheckItemComponent } from './check-item.component';

describe('PipCheckItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipCheckItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(PipCheckItemComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});

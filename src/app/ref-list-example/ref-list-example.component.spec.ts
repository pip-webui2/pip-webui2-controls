import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefListExampleComponent } from './ref-list-example.component';

describe('RefListExampleComponent', () => {
  let component: RefListExampleComponent;
  let fixture: ComponentFixture<RefListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

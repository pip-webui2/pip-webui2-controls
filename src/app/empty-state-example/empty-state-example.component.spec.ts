import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateExampleComponent } from './empty-state-example.component';

describe('EmptyStateExampleComponent', () => {
  let component: EmptyStateExampleComponent;
  let fixture: ComponentFixture<EmptyStateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyStateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

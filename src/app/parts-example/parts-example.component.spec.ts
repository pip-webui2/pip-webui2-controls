import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsExampleComponent } from './parts-example.component';

describe('PartsExampleComponent', () => {
  let component: PartsExampleComponent;
  let fixture: ComponentFixture<PartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

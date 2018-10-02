import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListExampleComponent } from './check-list-example.component';

describe('CheckListExampleComponent', () => {
  let component: CheckListExampleComponent;
  let fixture: ComponentFixture<CheckListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

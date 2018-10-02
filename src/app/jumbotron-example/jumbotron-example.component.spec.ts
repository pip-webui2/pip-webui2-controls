import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronExampleComponent } from './jumbotron-example.component';

describe('JumbotronExampleComponent', () => {
  let component: JumbotronExampleComponent;
  let fixture: ComponentFixture<JumbotronExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

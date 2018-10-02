import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputExampleComponent } from './search-input-example.component';

describe('SearchInputExampleComponent', () => {
  let component: SearchInputExampleComponent;
  let fixture: ComponentFixture<SearchInputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

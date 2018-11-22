import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatAutocompleteModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipSearchInputModule } from 'pip-webui2-controls';

import { SearchInputExampleComponent } from './search-input-example.component';

describe('SearchInputExampleComponent', () => {
  let component: SearchInputExampleComponent;
  let fixture: ComponentFixture<SearchInputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputExampleComponent],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatAutocompleteModule,
        TranslateModule.forRoot(),

        PipSearchInputModule
      ],
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

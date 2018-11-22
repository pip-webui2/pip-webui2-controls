import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipEmptyStateModule } from 'pip-webui2-controls';

import { EmptyStateExampleComponent } from './empty-state-example.component';

describe('EmptyStateExampleComponent', () => {
  let component: EmptyStateExampleComponent;
  let fixture: ComponentFixture<EmptyStateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyStateExampleComponent],
      imports: [
        CommonModule,
        TranslateModule.forRoot(),

        PipEmptyStateModule
      ],
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

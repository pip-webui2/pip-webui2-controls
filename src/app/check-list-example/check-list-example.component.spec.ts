import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { PipCheckItemModule } from 'pip-webui2-controls';

import { CheckListExampleComponent } from './check-list-example.component';

describe('CheckListExampleComponent', () => {
  let component: CheckListExampleComponent;
  let fixture: ComponentFixture<CheckListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListExampleComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,

        PipCheckItemModule
      ],
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

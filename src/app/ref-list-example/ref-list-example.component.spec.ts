import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipRefItemModule } from 'pip-webui2-controls';

import { RefListExampleComponent } from './ref-list-example.component';

describe('RefListExampleComponent', () => {
  let component: RefListExampleComponent;
  let fixture: ComponentFixture<RefListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefListExampleComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,

        PipRefItemModule
      ],
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

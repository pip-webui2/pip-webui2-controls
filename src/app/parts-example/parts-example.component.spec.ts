import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipPartModule } from 'pip-webui2-controls';

import { PipPartDirective } from './parts-name-example.directive';
import { PartsExampleComponent } from './parts-example.component';

describe('PartsExampleComponent', () => {
  let component: PartsExampleComponent;
  let fixture: ComponentFixture<PartsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartsExampleComponent, PipPartDirective],
      imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,

        PipPartModule
      ],
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

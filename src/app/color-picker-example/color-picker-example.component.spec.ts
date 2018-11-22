import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { PipColorPickerModule } from 'pip-webui2-controls';

import { ColorPickerExampleComponent } from './color-picker-example.component';

describe('ColorPickerExampleComponent', () => {
  let component: ColorPickerExampleComponent;
  let fixture: ComponentFixture<ColorPickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPickerExampleComponent],
      imports: [
        CommonModule,

        PipColorPickerModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

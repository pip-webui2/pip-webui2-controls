import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { PipJumbotronModule } from 'pip-webui2-controls';

import { JumbotronExampleComponent } from './jumbotron-example.component';

describe('JumbotronExampleComponent', () => {
  let component: JumbotronExampleComponent;
  let fixture: ComponentFixture<JumbotronExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumbotronExampleComponent],
      imports: [
        CommonModule,

        PipJumbotronModule
      ],
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

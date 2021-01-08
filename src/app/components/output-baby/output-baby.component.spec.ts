import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBabyComponent } from './output-baby.component';

describe('OutputBabyComponent', () => {
  let component: OutputBabyComponent;
  let fixture: ComponentFixture<OutputBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFatherComponent } from './output-father.component';

describe('OutputFatherComponent', () => {
  let component: OutputFatherComponent;
  let fixture: ComponentFixture<OutputFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputFatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

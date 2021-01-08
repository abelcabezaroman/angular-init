import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefsComponent } from './thiefs.component';

describe('ThiefsComponent', () => {
  let component: ThiefsComponent;
  let fixture: ComponentFixture<ThiefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

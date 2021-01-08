import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassScoreComponent } from './ng-class-score.component';

describe('NgClassScoreComponent', () => {
  let component: NgClassScoreComponent;
  let fixture: ComponentFixture<NgClassScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

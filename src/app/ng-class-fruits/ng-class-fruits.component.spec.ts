import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassFruitsComponent } from './ng-class-fruits.component';

describe('NgClassFruitsComponent', () => {
  let component: NgClassFruitsComponent;
  let fixture: ComponentFixture<NgClassFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

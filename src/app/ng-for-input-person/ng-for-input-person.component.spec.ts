import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForInputPersonComponent } from './ng-for-input-person.component';

describe('NgForInputPersonComponent', () => {
  let component: NgForInputPersonComponent;
  let fixture: ComponentFixture<NgForInputPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForInputPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForInputPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProGalaxyFormComponent } from './pro-galaxy-form.component';

describe('ProGalaxyFormComponent', () => {
  let component: ProGalaxyFormComponent;
  let fixture: ComponentFixture<ProGalaxyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProGalaxyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProGalaxyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

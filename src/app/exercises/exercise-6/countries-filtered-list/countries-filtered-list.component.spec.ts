import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFilteredListComponent } from './countries-filtered-list.component';

describe('CountriesFilteredListComponent', () => {
  let component: CountriesFilteredListComponent;
  let fixture: ComponentFixture<CountriesFilteredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesFilteredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesFilteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

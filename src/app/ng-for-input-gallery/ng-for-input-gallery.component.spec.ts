import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForInputGalleryComponent } from './ng-for-input-gallery.component';

describe('NgForInputGalleryComponent', () => {
  let component: NgForInputGalleryComponent;
  let fixture: ComponentFixture<NgForInputGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForInputGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForInputGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

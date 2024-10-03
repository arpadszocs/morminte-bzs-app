import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranitMGalleryComponent } from './granit-m-gallery.component';

describe('GranitMGalleryComponent', () => {
  let component: GranitMGalleryComponent;
  let fixture: ComponentFixture<GranitMGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GranitMGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranitMGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

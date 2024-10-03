import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicMGalleryComponent } from './mosaic-m-gallery.component';

describe('MosaicMGalleryComponent', () => {
  let component: MosaicMGalleryComponent;
  let fixture: ComponentFixture<MosaicMGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicMGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicMGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

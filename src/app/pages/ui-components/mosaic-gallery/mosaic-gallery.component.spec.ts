import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicGalleryComponent } from './mosaic-gallery.component';

describe('MosaicGalleryComponent', () => {
  let component: MosaicGalleryComponent;
  let fixture: ComponentFixture<MosaicGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

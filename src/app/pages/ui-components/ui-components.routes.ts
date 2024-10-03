import { Routes } from '@angular/router';

// ui
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { MosaicGalleryComponent } from './mosaic-gallery/mosaic-gallery.component';
import { GranitMGalleryComponent } from './granit-m-gallery/granit-m-gallery.component';
import { MosaicMGalleryComponent } from './mosaic-m-gallery/mosaic-m-gallery.component';
import { OtherComponent } from './other/other.component';
import { GranitGalleryComponent } from './granit-gallery/granit-gallery.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'gallery-card',
        component: GalleryCardComponent
      },
      {
        path: 'granit',
        component: GranitGalleryComponent
      },
      {
        path: 'mosaic',
        component: MosaicGalleryComponent
      },
      {
        path: 'granit-m',
        component: GranitMGalleryComponent
      },
      {
        path: 'mosaic-m',
        component: MosaicMGalleryComponent
      },
      {
        path: 'other',
        component: OtherComponent
      },
      {
        path: 'locations',
        component: LocationComponent
      },
      {
        path: 'contacts',
        component: ContactComponent
      },
    ],
  },
];

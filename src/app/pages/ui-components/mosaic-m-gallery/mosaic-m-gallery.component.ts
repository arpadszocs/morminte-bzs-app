import { Component } from '@angular/core';
import { GalleryCardComponent } from "../gallery-card/gallery-card.component";
import { Tile } from '../gallery-card/gallery.tile.model';

@Component({
  selector: 'app-mosaic-m-gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './mosaic-m-gallery.component.html',
  styleUrl: './mosaic-m-gallery.component.scss'
})
export class MosaicMGalleryComponent {
  tiles: Tile[] = [];
}

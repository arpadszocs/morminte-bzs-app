import { Component } from '@angular/core';
import { GalleryCardComponent } from "../gallery-card/gallery-card.component";
import { Tile } from '../gallery-card/gallery.tile.model';

@Component({
  selector: 'app-mosaic-gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './mosaic-gallery.component.html',
  styleUrl: './mosaic-gallery.component.scss'
})
export class MosaicGalleryComponent {
  tiles: Tile[] = []
}

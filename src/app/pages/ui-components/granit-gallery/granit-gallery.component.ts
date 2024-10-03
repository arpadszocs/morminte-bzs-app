import { Component } from '@angular/core';
import { GalleryCardComponent } from "../gallery-card/gallery-card.component";
import { Tile } from '../gallery-card/gallery.tile.model';

@Component({
  selector: 'app-granit-gallery',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './granit-gallery.component.html',
  styleUrl: './granit-gallery.component.scss'
})
export class GranitGalleryComponent {
  tiles: Tile[] = [
    {
      title: 'Image-1',
      src: "https://via.placeholder.com/500x400?text=Image+1",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    },
    {
      title: 'Image-2',
      src: "https://via.placeholder.com/500x400?text=Image+2",
      width: 400,
      height: 300,
      viewNr: 0
    }
  ];
}

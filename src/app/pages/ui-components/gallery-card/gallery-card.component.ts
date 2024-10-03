import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardTitle } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Tile } from './gallery.tile.model';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatGridList, MatGridTile, MatIcon, TablerIconsModule],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.scss'
})
export class GalleryCardComponent implements OnInit {

  readonly dialog = inject(MatDialog);

  ratings: number[] = [1, 2, 3, 4, 5]

  @Input() tiles: Tile[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void { }

  openImage(image: Tile) {
    this.dialog.open(ImageDialogComponent, {
      minWidth: image.width,
      minHeight: image.height,
      data: {
        src: image.src
      }
    })
    image.viewNr++;
  }

}



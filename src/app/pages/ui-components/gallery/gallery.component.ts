import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatListItem, MatNavList, MatSelectionList } from '@angular/material/list';
import { ImageItem } from './image-item';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatListItem, ScrollingModule, MatSelectionList, MatNavList, MatIcon],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  @ViewChildren('activeItem') activeItems: QueryList<ElementRef>;
  // @ViewChild('activeItem') activeItem: ElementRef;

  selectedImage!: ImageItem;

  images: ImageItem[] = [{
    src: "https://via.placeholder.com/600x400?text=Image+1"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+2"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+3"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+4"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+5"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+6"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+7"
  },
  {
    src: "https://via.placeholder.com/600x400?text=Image+8"
  }
  ]

  ngOnInit(): void {
    this.selectedImage = this.images[0];
  }

  select(imageItem: ImageItem) {
    this.selectedImage = imageItem;
    this.scrollToItem(imageItem);
  }

  selectNext() {
    let currentImageIndex = this.images.indexOf(this.selectedImage);
    if (currentImageIndex === this.images.length - 1) {
      return;
    }
    this.select(this.images[currentImageIndex + 1],);
  }

  selectPrevious() {
    let currentImageIndex = this.images.indexOf(this.selectedImage);
    if (currentImageIndex === 0) {
      return;
    }
    this.select(this.images[currentImageIndex - 1]);
  }

  scrollToItem(imageItem: ImageItem) {
    let activeItem = this.activeItems.find(item => item.nativeElement.querySelector('img').src == imageItem.src)

    if (activeItem) {
      activeItem.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      console.log('ERROR: Could not find active item');
      
    }
  }

}

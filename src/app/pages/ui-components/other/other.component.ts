import { Component } from '@angular/core';
import { GalleryCardComponent } from "../gallery-card/gallery-card.component";

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [GalleryCardComponent],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent {

}

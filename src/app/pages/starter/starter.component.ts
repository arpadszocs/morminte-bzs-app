import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HomeItem } from './home.item.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule
  ],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
  homeItems: HomeItem[] = [{
    title: "Granit",
    image: "https://via.placeholder.com/500x400?text=Image+1",
    link: "granit"
  },
  {
    title: "Granit M",
    image: "https://via.placeholder.com/500x400?text=Image+2",
    link: "granit-m"
  },
  {
    title: "Mosaic",
    image: "https://via.placeholder.com/500x400?text=Image+3",
    link: "mosaic"
  },
  {
    title: "Mosaic M",
    image: "https://via.placeholder.com/500x400?text=Image+3",
    link: "mosaic-m"
  },
  ]
}

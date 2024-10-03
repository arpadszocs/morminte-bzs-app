import { Component } from '@angular/core';
import { GoogleMapsModule, MapAdvancedMarker } from '@angular/google-maps';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

export interface Location {
  name: string;
  address: string;
  options: google.maps.MapOptions;
  markerOptions: google.maps.marker.AdvancedMarkerElementOptions
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [GoogleMapsModule, MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

  luncaMs: Location = {
    name: 'Morminte BZS SRL',
    address: 'Drumul Tarii, nr 220, Lunca Muresului 517405',
    options: {
      center: { lat: 46.428968, lng: 23.907045 }
    },
    markerOptions: {}
  }

  sovarad: Location = {
    name: 'Sovarad kiallitas',
    address: 'Str Hostad, nr 80, Sarateni 545504',
    options: {
      mapId: 'a366d4a995f5d39a',
      center: { lat: 46.562734, lng: 25.017732 }
    },
    markerOptions: {
      position: { lat: 46.562734, lng: 25.017732 },
      title: "Sovarad kiallitas",
    }
  }

}

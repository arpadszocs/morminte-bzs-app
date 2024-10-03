import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding">
      <a [routerLink]="['/']">
        <img
          src="./assets/images/logos/logo (1).png" 
          class="align-middle m-2"
          alt="logo"
          width="65"
          height="95"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

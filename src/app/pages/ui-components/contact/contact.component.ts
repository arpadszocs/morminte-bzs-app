import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';

export interface Contact {
  name: string,
  imgUrl?: string,
  description?: string,
  pthone: string,
  fb: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIcon,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  messageForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  contacts: Contact[] = [
    {
      name: 'Balazs Daniel',
      pthone: '0721235906',
      imgUrl: "https://via.placeholder.com/300x200?text=Image+2",
      fb: 'https://www.facebook.com/profile.php?id=100087879133166'
    },
    {
      name: 'Balazs Istvan',
      pthone: '0755780973',
      imgUrl: "https://via.placeholder.com/300x200?text=Image+2",
      fb: 'https://www.facebook.com/balazs.istvan.91'
    },
    {
      name: 'Balazs Jozsef',
      pthone: '0755780973',
      imgUrl: "https://via.placeholder.com/300x200?text=Image+2",
      fb: 'https://www.facebook.com/morminte'
    }
  ]

  openFacebook(fbUrl: string) {
    window.open(fbUrl);
  }

  sendMessage() {
    throw new Error('Method not implemented.');
  }

}

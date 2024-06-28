import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  socialMedia = [
    { icon: 'facebook', name: 'Facebook', link: 'https://www.facebook.com' },
    { icon: 'twitter', name: 'Twitter', link: 'https://www.twitter.com' }
    // Agrega más según sea necesario
  ];

  phoneNumbers = [
    { icon: 'phone', number: '+1-123-456-7890' },
    { icon: 'phone', number: '+1-987-654-3210' }
    // Agrega más según sea necesario
  ];
}

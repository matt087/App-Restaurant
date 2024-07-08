import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Dato } from '../../models/dato';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myArray: Dato[] = [];

  socialMedia = [
    { icon: 'facebook', name: 'Facebook', link: 'https://www.facebook.com' },
    { icon: 'twitter', name: 'Twitter', link: 'https://www.twitter.com' }
  ];

  phoneNumbers = [
    { icon: 'phone', number: '+1-123-456-7890' },
    { icon: 'phone', number: '+1-987-654-3210' }
  ];

  constructor(private dserv:DatosService){
    this.dserv.getData().subscribe(data=>{
      this.myArray = data;
        console.log(this.myArray);

    })
  }
}

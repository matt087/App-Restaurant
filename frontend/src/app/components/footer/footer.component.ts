import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
}

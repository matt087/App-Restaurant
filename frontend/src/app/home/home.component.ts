import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentSlide = 0;
  slides = [
    { image: 'assets/images/platillo1.jpg', caption: 'Platillo 1' },
    { image: 'assets/images/platillo2.jpg', caption: 'Platillo 2' },
    { image: 'assets/images/platillo3.jpg', caption: 'Platillo 3' }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}

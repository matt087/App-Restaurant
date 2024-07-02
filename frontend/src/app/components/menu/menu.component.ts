import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../../services/platillos.service';
import { Platillo } from '../../models/platillo';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  myArray: Platillo[] = [];
  constructor(private pService:PlatillosService){
    this.pService.getData().subscribe(data =>{
      this.myArray = data.platillos;
      console.log(this.myArray);
  }); 
  }

  ngOnInit(): void {
  }
}

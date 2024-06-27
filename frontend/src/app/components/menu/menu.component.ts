import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../../services/platillos.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  constructor(private pService:PlatillosService){}
  myArray: any[] = [];

  ngOnInit(): void {
    this.pService.getData().subscribe(data =>{
      this.myArray = data.platillos;
      console.log(this.myArray);
  }); 
  }
}

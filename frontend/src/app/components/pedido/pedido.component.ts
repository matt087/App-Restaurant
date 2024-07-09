import { Component } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  order: any = {
    user: { name: '' },
    dishes: [],
    totalPrice: 0
  };

  selectedDishes: any[] = [];

  constructor(private pser:PedidosService){}
  calculateTotalPrice(): void {
    this.order.totalPrice = this.selectedDishes.reduce((total, dish) => {
      return total + dish.precio * dish.quantity;
    }, 0);
  }

  /*addDishToOrder(dish: any, quantity: number): void {
    const existingDish = this.order.dishes.find(d => d.dishId === dish._id);
    if (existingDish) {
      existingDish.quantity += quantity;
    } else {
      this.order.dishes.push({ dishId: dish._id, quantity });
      this.selectedDishes.push({ ...dish, quantity });
    }
    this.calculateTotalPrice();
  }

  makeOrder(): void {
    this.pser.makeOrder(this.order).subscribe(
      response => {
        console.log(response.message);
        this.resetOrder(); // Limpiar el formulario de pedido
      },
      error => console.error('Error al realizar el pedido', error)
    );
  }

  resetOrder(): void {
    this.order = {
      user: { name: '' },
      dishes: [],
      totalPrice: 0
    };
    this.selectedDishes = [];
  }*/
}

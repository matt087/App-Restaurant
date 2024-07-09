import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { PlatillosService } from '../../services/platillos.service';
import { Platillo } from '../../models/platillo';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  products: Platillo[] = [];
  orderForm: FormGroup;

  constructor(
    private pser: PedidosService,
    private fb: FormBuilder,
    private platser: PlatillosService
  ) {
    this.orderForm = this.fb.group({
      items: this.fb.array([])
    });
  }

  ngOnInit() {
    this.platser.getData().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.initializeForm();
    });
  }

  initializeForm() {
    this.orderForm.setControl('items', this.fb.array(this.products.map(product => this.createItem(product))));
  }

  createItem(product: Platillo): FormGroup {
    return this.fb.group({
      nombre: [product.nombre],
      precio: [product.precio],
      cantidad: [0, [Validators.required, Validators.min(0)]]
    });
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  onSubmit() {
    const formValue = this.orderForm.value;
    const order = {
      products: formValue.items,
      total: formValue.items.reduce((acc: number, item: { precio: number; cantidad: number }) => acc + item.precio * item.cantidad, 0)
    };

    this.pser.placeOrder(order).subscribe(
      response => {
        console.log('Order placed successfully', response);
        alert('¡El pedido ha sido realizado con éxito!');
        this.initializeForm();
      },
      error => {
        console.error('Error placing order', error);
      }
    );
  }
}

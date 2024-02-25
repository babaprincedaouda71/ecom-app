import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  public orders: any;
  constructor(private orderService : OrderService) {
  }

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe({
        next : value => {
          this.orders = value
        },
        error : err => {
          console.log(err.message)
        }
      })
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  public orders: any;
  constructor(private orderService : OrderService,
              private router : Router) {
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

  getOrderDetails(order : any) {
    this.router.navigateByUrl("/order-details/" + order.id)
  }
}

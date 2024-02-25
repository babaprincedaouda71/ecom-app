import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit{
  orderId! : string
  orderDetails : any
  constructor(private route : ActivatedRoute,
              private orderService : OrderService) {
    this.orderId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getOrder(this.orderId)
  }

  getOrder(id : string) {
    this.orderService.getOrder(id)
      .subscribe({
        next : data => {
          this.orderDetails = data
        },
        error : err => {
          console.log(err.message)
        }
      })
  }

  getTotal(orderDetails: any) {
    let total = 0
    orderDetails.productItems.forEach((pi: { price: number; quantity: number; }) => {
      total = total + (pi.price * pi.quantity)
    })
    return total
  }
}

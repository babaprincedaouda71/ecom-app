import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  public getOrders() {
    return this.http.get("http://localhost:8888/ORDER-SERVICE/order/all")
  }

  public getOrder(id : string) {
    return this.http.get(`http://localhost:8888/ORDER-SERVICE/order/find/${id}`)
  }
}

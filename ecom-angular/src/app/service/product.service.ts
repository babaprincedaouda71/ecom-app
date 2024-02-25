import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  public addProduct(product : any) {
    return this.http.post("http://localhost:8888/INVENTORY-SERVICE/product/add", product)
  }

  public getProducts() {
    return this.http.get("http://localhost:8888/INVENTORY-SERVICE/product/all")
  }

  public getProduct(id : string) {
    return this.http.get(`http://localhost:8888/INVENTORY-SERVICE/product/find/${id}`)
  }

  public updateProduct(product : any) {
    return this.http.put("http://localhost:8888/INVENTORY-SERVICE/product/update", product)
  }

  public deleteProduct(id : string) {
    return this.http.delete(`http://localhost:8888/INVENTORY-SERVICE/product/delete/${id}`)
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  public products: any;
  constructor(private productService : ProductService) {
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe({
        next : value => {
          this.products = value
        },
        error : err => {
          console.log(err.message)
        }
      })
  }
}

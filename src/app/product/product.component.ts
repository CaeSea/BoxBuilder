import { Component, OnInit, Input } from "@angular/core";

import { IProducts } from "../models/iProducts";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: IProducts;
  @Input() index: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart(product: IProducts): void {
    this.cartService.addProductToCart(product);
  }
}

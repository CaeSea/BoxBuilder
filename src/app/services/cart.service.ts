import { Injectable } from "@angular/core";

import { IProducts } from "../models/iProducts";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {}

  cart: IProducts[] = [];

  addProductToCart(product: IProducts): void {
    // There could be a point where user wants more than one of one item so we need to check quantity.
    const alreadyAdded = this.cart.find(p => p.productId === product.productId);
    if (alreadyAdded) {
      alreadyAdded.quantityOrdered = alreadyAdded.quantityOrdered + 1;
    } else {
      product.quantityOrdered = 1;
      this.cart.push(product);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }
}

import { Injectable } from "@angular/core";

import { IProducts } from "../models/iProducts";

import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {
    if (sessionStorage.getItem("cart")) {
      this.cart = JSON.parse(sessionStorage.getItem("cart"));
    }
  }

  public cart: IProducts[] = [];
  private cartSubject = new Subject<IProducts[]>();

  sendCart(): void {
    this.cartSubject.next(this.cart);
  }

  getCart(): Observable<IProducts[]> {
    return this.cartSubject.asObservable();
  }

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
    this.sendCart();
  }

  removeProductFromCart(product: IProducts, removeAll: boolean): void {
    const theProduct = this.cart.find(p => p.productId === product.productId);
    if (removeAll) {
      this.cart = this.cart.filter(p => p.productId !== product.productId);
    } else {
      theProduct.quantityOrdered = theProduct.quantityOrdered - 1;
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.sendCart();
  }
}
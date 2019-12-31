import { Injectable } from "@angular/core";

import { IAccordionMaxProducts, IProducts } from "../models/iProducts";

import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor() {}

  public cart: IProducts[] = [];
  private cartSubject = new Subject<IProducts[]>();

  public groupCount: IAccordionMaxProducts = {
    accordion1: 0,
    accordion2: 0,
    accordion3: 0,
    accordion4: 0,
    accordion5: 0
  };

  editGroupCount(accordion: number, mode: string, numToRemove?: number): void {
    if (mode === "add") {
      this.groupCount[`accordion${accordion}`] =
        this.groupCount[`accordion${accordion}`] + 1;
    } else if (mode === "minusAll") {
      this.groupCount[`accordion${accordion}`] =
        this.groupCount[`accordion${accordion}`] - numToRemove;
    } else {
      this.groupCount[`accordion${accordion}`] =
        this.groupCount[`accordion${accordion}`] - 1;
    }
    console.log(this.groupCount);
  }

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
    this.sendCart();
  }

  removeProductFromCart(product: IProducts, removeAll: boolean): void {
    const theProduct = this.cart.find(p => p.productId === product.productId);
    if (removeAll) {
      this.cart = this.cart.filter(p => p.productId !== product.productId);
    } else {
      theProduct.quantityOrdered = theProduct.quantityOrdered - 1;
    }
    this.sendCart();
  }
}

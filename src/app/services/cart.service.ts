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
    console.log(numToRemove);
    switch (accordion) {
      case 1:
        if (mode === "add") {
          this.groupCount.accordion1 = this.groupCount.accordion1 + 1;
        } else if (mode === "minusAll") {
          this.groupCount.accordion1 = this.groupCount.accordion1 - numToRemove;
        } else {
          this.groupCount.accordion1 = this.groupCount.accordion1 - 1;
        }
        break;
      case 2:
        if (mode === "add") {
          this.groupCount.accordion2 = this.groupCount.accordion2 + 1;
        } else if (mode === "minusAll") {
          this.groupCount.accordion2 = this.groupCount.accordion2 - numToRemove;
        } else {
          this.groupCount.accordion2 = this.groupCount.accordion2 - 1;
        }
        break;
      case 3:
        if (mode === "add") {
          this.groupCount.accordion3 = this.groupCount.accordion3 + 1;
        } else if (mode === "minusAll") {
          this.groupCount.accordion3 = this.groupCount.accordion3 - numToRemove;
        } else {
          this.groupCount.accordion3 = this.groupCount.accordion3 - 1;
        }
        break;
      case 4:
        if (mode === "add") {
          this.groupCount.accordion4 = this.groupCount.accordion4 + 1;
        } else if (mode === "minusAll") {
          this.groupCount.accordion4 = this.groupCount.accordion4 - numToRemove;
        } else {
          this.groupCount.accordion4 = this.groupCount.accordion4 - 1;
        }
        break;
      case 5:
        if (mode === "add") {
          this.groupCount.accordion5 = this.groupCount.accordion5 + 1;
        } else if (mode === "minusAll") {
          this.groupCount.accordion5 = this.groupCount.accordion5 - numToRemove;
        } else {
          this.groupCount.accordion5 = this.groupCount.accordion5 - 1;
        }
        break;
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

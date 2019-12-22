import { Component, OnInit, Input } from "@angular/core";

import { IProducts } from "../../models/iProducts";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: IProducts;
  @Input() index: number;
  productInCart: boolean = false;
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.checkIfInCart();
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.product);
    this.productInCart = true;
    this.cartQuantity++;
  }

  removeFromCart(removeAll: boolean): void {
    this.cartService.removeProductFromCart(this.product, removeAll);
    if (removeAll) {
      this.cartQuantity = 0;
      this.productInCart = false;
    } else {
      if (this.cartQuantity >= 2) {
        this.cartQuantity--;
      } else {
        this.productInCart = false;
        this.cartQuantity = 0;
      }
    }
  }

  checkIfInCart(): void {
    const theProduct = this.cartService.cart.find(
      p => p.productId === this.product.productId
    );
    if (theProduct) {
      this.productInCart = true;
      this.cartQuantity = theProduct.quantityOrdered;
    }
  }
}

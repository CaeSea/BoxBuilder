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
  maxProductsFromGroup: boolean;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.checkIfInCart();
  }

  addToCart(): void {
    this.cartService.addProductToCart(this.product);
    this.productInCart = true;
    this.cartQuantity++;
    this.cartService.editGroupCount(this.product.accordion, "add");
  }

  removeFromCart(removeAll: boolean): void {
    let mode: string;
    const cartQuantityBefore = this.cartQuantity;

    this.cartService.removeProductFromCart(this.product, removeAll);

    if (removeAll) {
      this.cartQuantity = 0;
      this.productInCart = false;
      mode = "minusAll";
    } else {
      if (this.cartQuantity >= 2) {
        this.cartQuantity--;
        mode = "minus";
      }
    }
    this.cartService.editGroupCount(
      this.product.accordion,
      mode,
      cartQuantityBefore
    );
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

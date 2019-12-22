import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Subscription } from "rxjs";

import { IProducts } from "../../models/iProducts";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnDestroy {
  @Input() boxType: string;
  cartSubscription: Subscription;
  cart: IProducts[] = [];
  price: number;

  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      console.log(this.cart);
    });
  }

  ngOnInit() {
    this.setPrice();
    this.cart = this.cartService.cart;
  }

  setPrice(): void {
    if (this.boxType === "basic") {
      this.price = 15.99;
    } else if (this.boxType === "classic") {
      this.price = 23.99;
    } else {
      this.price = 34.99;
    }
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}

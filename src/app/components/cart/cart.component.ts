import { Component, OnInit, Input } from "@angular/core";
import { CartService } from 'src/app/services/cart.service';

import { IProducts } from "../../models/iProducts";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  @Input() boxType: string;
  cart: IProducts[] = [];
  price: number;

  constructor(private cartService: CartService) { }

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
}

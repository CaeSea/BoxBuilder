import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { IProducts } from "../../models/iProducts";
import { CartService } from "../../services/cart.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent implements OnInit {
  @Input() private product: IProducts;
  @Input() private index: number;
  @Output() public disableButtonsChange = new EventEmitter<{
    accordion: number;
    disable: boolean;
  }>();

  private productInCart: boolean = false;
  private cartQuantity: number = 0;
  private maxProductsFromGroup: boolean;

  constructor(
    private cartService: CartService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.checkIfInCart();
    console.log(this.product);
  }

  addToCart(): void {
    const maxAllowedInAccordion: number = this.dataService.accordionMaxProducts[
      `accordion${this.product.accordion}`
    ];

    this.cartService.addProductToCart(this.product);
    this.productInCart = true;
    this.cartQuantity++;

    const numberOfProductsFromAccordion: number = this.cartService.editGroupCount(
      this.product.accordion,
      "add"
    );

    if (numberOfProductsFromAccordion === maxAllowedInAccordion) {
      this.checkDisableAddButton(true);
      this.dataService.setAddButtonsDisabled(true);
    }
  }

  removeFromCart(removeAll: boolean): void {
    let mode: string;

    this.cartService.removeProductFromCart(this.product, removeAll);

    if (removeAll) {
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
      this.cartQuantity
    );

    if (removeAll) {
      this.cartQuantity = 0;
    }

    if (this.dataService.getButtonsDisabled()) {
      this.checkDisableAddButton(false);
      this.dataService.setAddButtonsDisabled(false);
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

  checkDisableAddButton(disable: boolean): void {
    const params: { accordion: number; disable: boolean } = {
      accordion: this.product.accordion,
      disable
    };
    this.disableButtonsChange.emit(params);
  }
}

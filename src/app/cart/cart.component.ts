import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  @Input() boxType: string;
  price: number;

  constructor() {}

  ngOnInit() {
    this.setPrice();
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

import { Component, OnInit, Input } from "@angular/core";

import { IProducts } from "../models/iProducts";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: IProducts;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}

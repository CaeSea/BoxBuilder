import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

import { IProducts } from "../models/iProducts";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.css"]
})
export class BuilderComponent implements OnInit {
  constructor(private dataService: DataService) {
    this.getProducts();
  }

  boxType: string;
  products: IProducts[];
  accordionCount: number;
  accordionCountArray: number[] = [];
  sortedAccProducts = [];

  ngOnInit() {
    this.checkBoxTypeChosen();
    this.setUpNumberOfAccordions();
  }

  getProducts(): void {
    this.dataService.getJsonData().subscribe(
      data => {
        this.products = data.products;
        console.log(this.products);
        this.sortProducts();
      },
      err => console.log(err)
    );
  }

  sortProducts(): void {
    // tslint:disable-next-line: one-variable-per-declaration
    const acc1Products = [],
      acc2Products = [],
      acc3Products = [],
      acc4Products = [],
      acc5Products = [];

    for (const product of this.products) {
      switch (product.accordion) {
        case 1:
          acc1Products.push(product);
          break;
        case 2:
          acc2Products.push(product);
          break;
        case 3:
          acc3Products.push(product);
          break;
        case 4:
          acc4Products.push(product);
          break;
        case 5:
          acc5Products.push(product);
          break;
      }
    }
    this.sortedAccProducts.push(
      acc1Products,
      acc2Products,
      acc3Products,
      acc4Products,
      acc5Products
    );
  }

  checkBoxTypeChosen(): void {
    if (this.dataService.boxTypeChosen === "") {
      if (sessionStorage.getItem("boxType") !== null) {
        this.boxType = sessionStorage.getItem("boxType");
      }
    } else {
      this.boxType = this.dataService.boxTypeChosen;
      sessionStorage.setItem("boxType", this.boxType);
      this.dataService.setBoxType(this.boxType);
    }
  }

  setUpNumberOfAccordions(): void {
    switch (this.boxType) {
      case "basic":
        this.accordionCount = 3;
        break;
      case "classic":
        this.accordionCount = 4;
        break;
      case "premium":
        this.accordionCount = 5;
        break;
    }
    for (let i = 0; i < this.accordionCount; i++) {
      this.accordionCountArray.push(i);
    }
  }

  makeTitle(index): string {
    let title: string;
    index = index + 1;
    switch (index) {
      case 1:
        title = `${index}. Let's get started!`;
        break;
      case 2:
        title = `${index}. And another...`;
        break;
      case 3:
        title = `${index}. Get some more!`;
        break;
      case 4:
        title = `${index}. More!`;
        break;
      case 5:
        title = `${index}. Last one, make it count!`;
        break;
    }
    return title;
  }
}

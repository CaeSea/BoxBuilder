import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DataService } from "../../services/data.service";
import { IProducts, IAccordionMaxProducts } from "../../models/iProducts";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.css"]
})
export class BuilderComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  private boxType: string;
  public products: IProducts[];
  public sortedAccProducts = [];
  private accordionCount: number;
  public accordionCountArray: number[] = [];

  ngOnInit() {
    this.checkBoxTypeChosen();
    this.getProducts();
    this.setUpNumberOfAccordions();
  }

  makeTitle(index: number): string {
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

  checkBoxTypeChosen(): void {
    this.boxType = this.route.snapshot.paramMap.get("type");
    this.setBoxType(this.boxType);
  }

  getProducts(): void {
    this.dataService.getJsonData().subscribe(
      data => {
        this.products = data.products;
        console.log(this.products);
        this.sortProducts();
        this.setAccordionMaxProducts(data.accordionMaxProducts);
      },
      err => console.log(err)
    );
  }

  setAccordionMaxProducts(accordionMaxProducts: IAccordionMaxProducts): void {
    this.dataService.setAccordionMaxProducts(accordionMaxProducts);
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

  setBoxType(type: string): void {
    this.dataService.setBoxType(type);
  }

  addDisableButtonsClass(params: {
    accordion: number;
    disable: boolean;
  }): void {
    // TODO: Move this functionality to external JS
    const { accordion, disable } = params;
    const productWrappers = document.querySelectorAll(
      `.products-wrapper-${accordion}`
    );

    if (disable) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < productWrappers.length; i++) {
        productWrappers[i].classList.add("disabled");
      }
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < productWrappers.length; i++) {
        productWrappers[i].classList.remove("disabled");
      }
    }
  }
}

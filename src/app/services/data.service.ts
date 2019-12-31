import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IProducts, IAccordionMaxProducts } from "../models/iProducts";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public products: IProducts[];
  public accordionMaxProducts: IAccordionMaxProducts;
  public boxTypeChosen: string = "";

  public disabledBeenAdded: boolean = false;

  constructor(private http: HttpClient) {}

  setAccordionMaxProducts(accordionMaxProducts: IAccordionMaxProducts): void {
    this.accordionMaxProducts = accordionMaxProducts;
  }

  setBoxType(type: string): void {
    this.boxTypeChosen = type;
  }

  setAddButtonsDisabled(value: boolean) {
    this.disabledBeenAdded = value;
  }

  getButtonsDisabled(): boolean {
    return this.disabledBeenAdded;
  }

  getJsonData(): Observable<any> {
    return this.http.get("../../assets/products.json");
  }
}

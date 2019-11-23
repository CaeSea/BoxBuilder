import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IProducts } from "../models/iProducts";

@Injectable({
  providedIn: "root"
})
export class DataService {
  products: IProducts[];
  boxTypeChosen: string = "";

  constructor(private http: HttpClient) {}

  setBoxType(type: string): void {
    this.boxTypeChosen = type;
  }

  getJsonData(): Observable<any> {
    return this.http.get("../../assets/products.json");
  }
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  boxTypeChosen: string = "";

  constructor() {}

  setBoxType(type: string): void {
    this.boxTypeChosen = type;
  }
}

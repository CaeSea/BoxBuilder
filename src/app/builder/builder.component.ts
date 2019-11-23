import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.css"]
})
export class BuilderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  boxType: string;

  ngOnInit() {
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
}

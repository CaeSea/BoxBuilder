import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.css"]
})
export class BuilderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.boxTypeChosen);
  }
}

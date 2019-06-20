import { Component, OnChanges } from "@angular/core";
import { ResultsTable } from "./results-table";
import "rxjs/Rx";
import { WeatherService } from "../../weather.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnChanges {
  myWeather: ResultsTable;
  location;
  constructor(private vs: WeatherService) {}

  ngOnInit() {
    this.myWeather = this.vs.tableWithValues();
  }
  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}

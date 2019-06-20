import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResultsTable } from "../weather/components/results/results-table";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { ResultsComponent } from "./components/results/results.component";

@Injectable()
export class WeatherService {
  currentWeather: ResultsTable = new ResultsTable(
    "London",
    "sunny",
    "29",
    "35",
    "https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Sunny-512.png"
  );

  url = "https://api.openweathermap.org/data/2.5/forecast";
  params = {
    q: "",
    cnt: "8",
    units: "metric",
    APPID: "010721642521f31b0fbc8c3831d45951"
  };

  // constructor(private http: HttpClient) {}

  tableWithValues() {
    return this.currentWeather;
  }

  searchWeatherForCity(city) {
    // implement the service
  }
}

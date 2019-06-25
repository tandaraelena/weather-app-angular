import { Injectable } from "@angular/core";
import "rxjs/Rx";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { ResultsComponent } from "./components/results/results.component";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

@Injectable()
export class WeatherService {

  url = "https://api.openweathermap.org/data/2.5/forecast";
  params = {
    q: "",
    cnt: "8",
    units: "metric",
    APPID: "010721642521f31b0fbc8c3831d45951"
  };
  

  constructor(
    private http: HttpClient,
    private store: Store<any> 
    ) {
      
    }

  updateCities = (result) => {
    // console.log(result)
    this.store.dispatch({
      type: "[resultsComponent] Add city",
      result
    })
  }

  searchWeatherForCity(city) {
    // implement the service
    this.http
      .get(
        `${this.url}?q=${city}&appid=${this.params.APPID}&units=${this.params.units}`
      )
      .subscribe(
        this.updateCities
      )
  }

}

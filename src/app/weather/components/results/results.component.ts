import { Component, OnChanges } from "@angular/core";
import "rxjs/Rx";
import { WeatherService } from "../../weather.service";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnChanges {
  
  public cities = []

  constructor(
    private vs: WeatherService,
    private store: Store<any>
    ) {
      
    }

  ngOnInit() {
    this
      .store
      .select((store) => {
        return store.results
      })
      .subscribe((res)=>{
        console.log(res)
        this.cities = res.map( city => {
          return {
            name: city.city.name,
            temperature: city.list.filter(x => {
              return [0, 6, 12, 18].includes(new Date(x.dt * 1000).getHours() - 1)
              })
              .slice(0, 4)
              .map(x => {
                return x.main.temp
              })
          }
        })
      })
  }
  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}

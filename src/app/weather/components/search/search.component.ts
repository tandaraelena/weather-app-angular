import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED

  constructor(
    private ws: WeatherService
  ) { }

  search(searchForCity) {
    // TO BE IMPLEMENTED
    this.ws.searchWeatherForCity(searchForCity.value)
  }
}

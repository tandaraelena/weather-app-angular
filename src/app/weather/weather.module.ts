import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms"

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/reducers/weather';
// import { EffectsModule } from '@ngrx/effects';
// import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({results: weatherReducer})
    // StoreModule.forFeature('weather', reducers),
    // EffectsModule.forFeature(effects)
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService,
    HttpClient
  ]
})
export class WeatherModule { }

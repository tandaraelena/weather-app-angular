import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";
import { WeatherModule } from "./weather/weather.module";
import { WeatherService } from "./weather/weather.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WeatherModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}

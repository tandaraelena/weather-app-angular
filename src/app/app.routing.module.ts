import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WeatherContainer } from "./weather/weather.container";

const APP_ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: WeatherContainer
  }
];
// nameOfConst: typeOfIt = libraryInside@angular/core.methodInsideRouterModule
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  APP_ROUTES
);

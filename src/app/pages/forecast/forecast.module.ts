import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForecastRoutingModule} from './forecast-routing.module';
import {ForecastComponent} from "./forecast.component";
import {ForecastItemComponent} from './forecast-item/forecast-item.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ForecastComponent,
    ForecastItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodayRoutingModule} from './today-routing.module';
import {TodayComponent} from "./today.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    TodayComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TodayRoutingModule
  ]
})
export class TodayModule {
}

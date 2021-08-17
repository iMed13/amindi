import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {LimitPipe} from "./pipes/limit/limit.pipe";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ErrorComponent} from "../pages/error/error.component";
import {HourPipe} from './pipes/hour/hour.pipe';
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LimitPipe,
    HourPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSliderModule,
    MatTabsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    LimitPipe,
    MatTabsModule,
    MatSliderModule,
    HourPipe
  ]
})
export class SharedModule {
}

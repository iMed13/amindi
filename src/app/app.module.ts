import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from '@ngrx/store';
import {nightModeReducer} from "./shared/store/reducers/night-mode.reducers";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    StoreModule.forRoot({nightMode: nightModeReducer}, {}),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

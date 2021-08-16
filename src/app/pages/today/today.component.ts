import {Component, OnInit} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {environment} from "../../../environments/environment";
import {SharedService} from "../../services/shared/shared.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  weather: any;
  nightMode: Observable<boolean>;
  currentDate: any = {};
  weatherImage: String = '';

  constructor(
    private store: Store<AppState>,
    private sharedService: SharedService,
    private todayService: TodayService) {
    this.nightMode = store.select('nightMode');
  }

  ngOnInit(): void {
    this.generateGeolocation();
  }

  private generateGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.subscribeGetCurrentWeather(position.coords.latitude, position.coords.longitude)
      });
    } else {
      console.log("User not allow")
    }
  }

  private subscribeGetCurrentWeather(latitude: any, longitude: any) {
    this.todayService.getCurrentWeather(latitude, longitude).subscribe(response => {
      this.currentDate = this.sharedService.generateDate(response.dt);
      this.weatherImage = environment.LINK + 'img/wn/' + response['weather'][0]['icon'] + '@2x.png';
      this.weather = response;
    })
  }

}

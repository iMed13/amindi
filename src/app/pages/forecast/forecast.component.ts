import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ForecastService} from "../../services/forecast/forecast.service";
import {SharedService} from "../../services/shared/shared.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastMap = new Map();
  activatedForecast: any;
  currentDate: string = '';
  constructor(
    private sharedService: SharedService,
    private forecastService: ForecastService
  ) {
  }

  ngOnInit(): void {
    this.defineCurrentDate();
    this.generateGeolocation();
  }

  selectWeather(response: any) {
    this.activatedForecast = response.value;
    this.activatedForecast['selectedId'] = response.key;
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
    this.forecastService.getForecast(latitude, longitude).subscribe(response => {
      this.groupByDate(response);
    })
  }

  private groupByDate(response: any) {
    response.list.forEach((item: any) => {
      const currentDate = this.sharedService.generateDate(item.dt);
      item['generatedDate'] = currentDate;
      let date = new Date(item.dt * 1000);
      let name = date.getDate() + '_' + date.getMonth() + '_' + date.getFullYear();
      if (this.forecastMap.has(name)) {
        this.forecastMap.set(name, {list: [...this.forecastMap.get(name).list, item], date: currentDate})
      } else {
        this.forecastMap.set(name, {list: [item], date: currentDate})
      }
    })
    this.activatedForecast = [...this.forecastMap.entries()][0][1];
    this.activatedForecast['selectedId'] = [...this.forecastMap.entries()][0][0]
  }

  private defineCurrentDate() {
    const date = new Date();
    this.currentDate = date.getDate() + '_' + date.getMonth() + '_' + date.getFullYear();
  }

}


import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ForecastService} from "../../services/forecast/forecast.service";
import {SharedService} from "../../services/shared/shared.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, AfterViewInit {
  forecastMap = new Map();
  nightMode: Observable<boolean>;
  activatedForecast: any;
  currentDate: string = '';
  isBrowser: boolean;
  @ViewChild('containerRefff') containerRefff: any;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private store: Store<AppState>,
    private sharedService: SharedService,
    private forecastService: ForecastService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.nightMode = store.select('nightMode');
  }

  ngOnInit(): void {
    this.defineCurrentDate();
    this.generateGeolocation();
  }

  ngAfterViewInit() {

    console.log(this.containerRefff.nativeElement)
  }

  selectWeather(response: any) {
    console.log(response)
    this.activatedForecast = [...this.forecastMap.entries()][response['index']][1];
    this.activatedForecast['selectedId'] = [...this.forecastMap.entries()][response['index']][0];
  }

  private generateGeolocation() {
    if (this.isBrowser) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.subscribeGetCurrentWeather(position.coords.latitude, position.coords.longitude)
        });
      } else {
        console.log("User not allow")
      }
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


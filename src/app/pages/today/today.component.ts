import {AfterViewChecked, AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {environment} from "../../../environments/environment";
import {SharedService} from "../../services/shared/shared.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isPlatformBrowser} from "@angular/common";
import {SeoService} from "../../services/seo/seo.service";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, AfterViewInit, AfterViewChecked {
  weather: any;
  nightMode: Observable<boolean>;
  currentDate: any = {};
  weatherImage: String = '';
  isBrowser: boolean;
  @ViewChild('weatherImageRef') weatherImageRef: any;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) platformId: Object,
    private store: Store<AppState>,
    private sharedService: SharedService,
    private todayService: TodayService) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.nightMode = store.select('nightMode');
  }

  ngOnInit(): void {
    this.generateGeolocation();
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    // if (this.weatherImageRef.nativeElement.src) {
    //   this.SEO({
    //     description: 'imeda',
    //     image: this.weatherImageRef.nativeElement.src,
    //     title: 'OPLAAAAAAAAAAAAAAAAAAAAA'
    //   });
    // }
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
    this.todayService.getCurrentWeather(latitude, longitude).subscribe(response => {
      this.currentDate = this.sharedService.generateDate(response.dt);
      this.weatherImage = environment.LINK + 'img/wn/' + response['weather'][0]['icon'] + '@2x.png';
      // <div>{{currentDate.date}} {{currentDate.month | titlecase}} {{currentDate.year}}</div>
      const date = '[' + this.currentDate?.date + ' ' + this.currentDate?.month.toUpperCase() + ' ' + this.currentDate?.year + '] - '
      this.weather = response;
      this.SEO({
        url: window.location.href,
        description: this.weather?.main.temp + ' °C | ' + this.weather?.weather[0].main,
        image: this.weatherImage,
        title: date + this.weather?.name + ', ' + this.weather?.sys.country.toUpperCase()
      });
    })
  }

  private SEO(data: any) {
    this.seoService.updateSEO(data)
  }
}

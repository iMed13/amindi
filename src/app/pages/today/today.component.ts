import {Component, OnInit} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {environment} from "../../../environments/environment";
import {SharedService} from "../../services/shared/shared.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  weather: any;
  currentDate: any = {};
  weatherImage: String = '';

  constructor(
    private sharedService: SharedService,
    private todayService: TodayService) {
  }

  ngOnInit(): void {
    this.generateGeolocation()
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

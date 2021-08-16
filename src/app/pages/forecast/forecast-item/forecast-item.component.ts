import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {
  @Input() forecast: any;
  @Input() currentDate: any;
  weatherImage: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.weatherImage = environment.LINK + 'img/wn/' + this.forecast['weather'][0]['icon'] + '@2x.png'
  }

}

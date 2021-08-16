import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) {
  }

  getForecast(lat: any, lon: any) {
    return this.http
      .get <any>(environment.API + 'data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + environment.API_KEY + '&units=metric')
      .pipe(catchError(err => {
        return throwError(err);
      }));
  }
}

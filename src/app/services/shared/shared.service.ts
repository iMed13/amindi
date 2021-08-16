import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  generateDate(timestamp: any) {
    const currentDate: any = {};
    const weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(timestamp * 1000);
    currentDate['day'] = weekday[date.getUTCDay() - 1];
    currentDate['month'] = months[date.getMonth()];
    currentDate['year'] = date.getFullYear();
    currentDate['date'] = date.getDate();
    currentDate['hour'] = (date.getHours());
    currentDate['ampm'] = date.getHours() >= 12 ? 'pm' : 'am';
    currentDate['minutes'] = date.getMinutes();
    return currentDate;
  }
}

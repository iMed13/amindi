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
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(timestamp * 1000);
    currentDate['day'] = weekday[date.getDay()];
    currentDate['month'] = months[date.getMonth()];
    currentDate['year'] = date.getFullYear();
    currentDate['date'] = date.getDate();
    currentDate['hour'] = (date.getHours());
    currentDate['ampm'] = date.getHours() >= 12 ? 'pm' : 'am';
    currentDate['minutes'] = date.getMinutes();
    return currentDate;
  }
}

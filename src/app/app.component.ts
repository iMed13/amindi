import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {switchNightMode} from "./shared/store/actions/night-mode.actions";
import {Observable} from "rxjs";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  nightMode: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {
    this.nightMode = store.select('nightMode');
  }

  ngOnInit() {
    const date = new Date();
    if (date.getDate() > 8 && date.getDate() < 20) {
      this.store.dispatch(switchNightMode({mode: true}));
    } else {
      this.store.dispatch(switchNightMode({mode: false}));
    }
  }
}

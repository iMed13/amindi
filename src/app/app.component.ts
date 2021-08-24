import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {switchNightMode} from "./shared/store/actions/night-mode.actions";
import {Observable} from "rxjs";
import {SeoService} from "./services/seo/seo.service";

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
    private seoService: SeoService,
    private store: Store<AppState>
  ) {
    this.nightMode = store.select('nightMode');
  }

  ngOnInit() {
    const date = new Date();
    if (date.getHours() > 8 && date.getHours() < 20) {
      this.store.dispatch(switchNightMode({mode: false}));
    } else {
      this.store.dispatch(switchNightMode({mode: true}));
    }
    this.seoService.addSEO();
  }
}

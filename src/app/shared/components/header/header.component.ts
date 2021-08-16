import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nightMode: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {
    this.nightMode = store.select('nightMode');
  }

  ngOnInit(): void {
  }

}

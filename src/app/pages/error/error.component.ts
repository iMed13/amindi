import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

interface AppState {
  readonly nightMode: any;
}

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  nightMode: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {
    this.nightMode = store.select('nightMode');
  }

  ngOnInit(): void {
  }

}

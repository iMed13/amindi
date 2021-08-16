import {createReducer, on} from '@ngrx/store';
import {switchNightMode} from "../actions/night-mode.actions";

export const initialState = false;

const _nightModeReducer = createReducer(
  initialState,
  on(switchNightMode, (state, action) => action.mode)
);

export function nightModeReducer(state: any, action: any) {
  return _nightModeReducer(state, action);
}

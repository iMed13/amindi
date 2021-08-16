import {createAction, props} from '@ngrx/store';

export const switchNightMode = createAction(
  '[Mode] Night Mode',
  props<{ mode: boolean }>()
);

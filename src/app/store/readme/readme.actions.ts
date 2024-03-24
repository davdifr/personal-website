import { SafeHtml } from '@angular/platform-browser';
import { createAction, props } from '@ngrx/store';

export const fetchReadme = createAction('[GitHub Readme] Fetch Readme');

export const fetchReadmeSuccess = createAction(
  '[GitHub Readme] Fetch Readme Success',
  props<{ readme: SafeHtml }>()
);

export const fetchReadmeFailure = createAction(
  '[GitHub Readme] Fetch Readme Failure'
);

import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { effects } from './store/app.effects';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideStore(reducers),
    provideEffects(effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};

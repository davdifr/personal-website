import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchRepositories,
  fetchRepositoriesFailure,
  fetchRepositoriesSuccess,
} from './repositories.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Repository } from '../../models/github.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class RepositoriesEffects {
  #http = inject(HttpClient);
  #actions$ = inject(Actions);
  #apiUrl = `${environment.api.github.url}/users/${environment.api.github.username}/repos`;

  loadRepositories$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(fetchRepositories),
      exhaustMap(() =>
        this.getRepositories().pipe(
          map((repositories: Repository[]) => {
            return fetchRepositoriesSuccess({ repositories });
          }),
          catchError(() => of(fetchRepositoriesFailure))
        )
      )
    )
  );

  private getRepositories() {
    return this.#http.get<Repository[]>(this.#apiUrl);
  }
}

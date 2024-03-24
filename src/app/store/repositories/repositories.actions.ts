import { createAction, props } from '@ngrx/store';
import { Repository } from '../../models/github.models';

export const fetchRepositories = createAction(
  '[GitHub Repositories] Fetch Repositories'
);

export const fetchRepositoriesSuccess = createAction(
  '[GitHub Repositories] Fetch Repositories Success',
  props<{ repositories: Repository[] }>()
);

export const fetchRepositoriesFailure = createAction(
  '[GitHub Repositories] Fetch Repositories Failure'
);

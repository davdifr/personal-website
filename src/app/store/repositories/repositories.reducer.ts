import { createReducer, on } from '@ngrx/store';
import { RepositoriesState } from '../../models/state.models';
import {
  fetchRepositories,
  fetchRepositoriesFailure,
  fetchRepositoriesSuccess,
} from './repositories.actions';

const initialState: RepositoriesState = {
  data: [],
  loading: false,
};

export const repositoriesReducer = createReducer(
  initialState,
  on(fetchRepositories, (state) => ({ ...state, loading: true })),
  on(fetchRepositoriesSuccess, (state, { repositories }) => ({
    data: repositories,
    loading: false,
  })),
  on(fetchRepositoriesFailure, (state) => ({ ...state, loading: false }))
);

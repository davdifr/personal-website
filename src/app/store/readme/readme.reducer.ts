import { createReducer, on } from '@ngrx/store';
import { ReadmeState } from '../../models/state.models';
import {
  fetchReadme,
  fetchReadmeFailure,
  fetchReadmeSuccess,
} from './readme.actions';

const initialState: ReadmeState = {
  data: '',
  loading: false,
};

export const readmeReducer = createReducer(
  initialState,
  on(fetchReadme, (state) => ({ ...state, loading: true })),
  on(fetchReadmeSuccess, (state, { readme }) => ({
    data: readme,
    loading: false,
  })),
  on(fetchReadmeFailure, (state) => ({ ...state, loading: false }))
);

import { AppState } from '../../models/state.models';

export const selectRepositories = (state: AppState) => state.repositories.data;
export const selectRepositoriesLoading = (state: AppState) =>
  state.repositories.loading;

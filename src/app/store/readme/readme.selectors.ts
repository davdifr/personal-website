import { AppState } from '../../models/state.models';

export const selectReadme = (state: AppState) => state.readme.data;
export const selectReadmeLoading = (state: AppState) => state.readme.loading;

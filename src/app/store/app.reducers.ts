import { readmeReducer } from './readme/readme.reducer';
import { repositoriesReducer } from './repositories/repositories.reducer';

export const reducers = {
  repositories: repositoriesReducer,
  readme: readmeReducer,
};

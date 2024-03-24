import { Readme, Repository } from './github.models';

export interface AppState {
  repositories: RepositoriesState;
  readme: ReadmeState;
}

export type RepositoriesState = RequestState<Repository[]>;
export type ReadmeState = RequestState<Readme>;

export interface RequestState<T> {
  data: T;
  loading: boolean;
}

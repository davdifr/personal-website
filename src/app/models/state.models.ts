import { SafeHtml } from '@angular/platform-browser';
import { Readme, Repository } from './github.models';

export interface AppState {
  repositories: RepositoriesState;
  readme: ReadmeState;
}

export type RepositoriesState = RequestState<Repository[]>;
export type ReadmeState = RequestState<SafeHtml>;

export interface RequestState<T> {
  data: T;
  loading: boolean;
}

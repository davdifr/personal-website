import { Component, inject, OnInit } from '@angular/core';
import { Repository } from '../../models/github.models';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/state.models';
import { fetchRepositories } from '../../store/repositories/repositories.actions';
import {
  selectRepositories,
  selectRepositoriesLoading,
} from '../../store/repositories/repositories.selectors';
import { AsyncPipe } from '@angular/common';
import { RepositoryCardComponent } from './repository-card/repository-card.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [AsyncPipe, RepositoryCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent implements OnInit {
  #http = inject(HttpClient);
  #store = inject(Store<AppState>);

  repositories$ = this.#store.select(selectRepositories);
  repositoriesLoading$ = this.#store.select(selectRepositoriesLoading);
  delayStep = 0.1;

  ngOnInit() {
    this.repositories$.subscribe((repositories) => {
      if (!repositories.length) {
        this.fetchRepositories();
      }
    });
  }

  private fetchRepositories() {
    this.#store.dispatch(fetchRepositories());
  }

  getAnimationDelay(index: number) {
    return `${index * this.delayStep}s`;
  }
}

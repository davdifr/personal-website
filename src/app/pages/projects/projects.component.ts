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

@Component({
  selector: 'projects',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent implements OnInit {
  #http = inject(HttpClient);
  #store = inject(Store<AppState>);

  repositories$ = this.#store.select(selectRepositories);
  repositoriesLoading$ = this.#store.select(selectRepositoriesLoading);

  ngOnInit() {
    this.repositories$.subscribe((repositories) => {
      // Fetch repositories if there are none
      if (!repositories.length) {
        this.fetchRepositories();
      }
    });
  }

  private fetchRepositories() {
    this.#store.dispatch(fetchRepositories());
  }
}

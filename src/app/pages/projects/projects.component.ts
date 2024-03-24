import { Component, inject } from '@angular/core';
import { Repository } from '../../models/github.models';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/state.models';
import { fetchRepositories } from '../../store/repositories/repositories.actions';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent {
  #http = inject(HttpClient);
  #store = inject(Store<AppState>);

  constructor() {
    this.#store.dispatch(fetchRepositories());
  }
}

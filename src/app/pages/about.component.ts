import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/state.models';
import {
  selectReadme,
  selectReadmeLoading,
} from '../store/readme/readme.selectors';
import { fetchReadme } from '../store/readme/readme.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'about',
  standalone: true,
  imports: [AsyncPipe],
  template: `<div [innerHTML]="readme$ | async"></div>`,
})
export default class AboutComponent implements OnInit {
  #store = inject(Store<AppState>);
  readme$ = this.#store.select(selectReadme);
  readmeLoading$ = this.#store.select(selectReadmeLoading);

  ngOnInit(): void {
    this.fetchReadme();
  }

  fetchReadme() {
    this.#store.dispatch(fetchReadme());
  }
}

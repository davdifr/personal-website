import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Repository } from '../../models/github.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export default class ProjectsComponent {
  #http = inject(HttpClient);
  #apiUrl = `${environment.api.github.url}/users/${environment.api.github.username}/repos`;

  projects: Repository[] = [];

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { Repository } from '../../../models/github.models';

@Component({
  selector: 'repository-card',
  standalone: true,
  imports: [],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css',
})
export class RepositoryCardComponent {
  @Input({ required: true }) repository = {} as Repository;
}

import { Component, inject, Input } from '@angular/core';
import { Repository } from '../../../models/github.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'repository-card',
  standalone: true,
  imports: [],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css',
})
export class RepositoryCardComponent {
  @Input({ required: true }) repository = {} as Repository;

  #sanitizer = inject(DomSanitizer);

  getSafeUrl(url: string): SafeUrl {
    return this.#sanitizer.bypassSecurityTrustUrl(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import {
  fetchReadme,
  fetchReadmeFailure,
  fetchReadmeSuccess,
} from './readme.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Readme } from '../../models/github.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Injectable()
export class ReadmeEffects {
  #http = inject(HttpClient);
  #actions$ = inject(Actions);
  #sanitizer = inject(DomSanitizer);
  #apiUrl = `${environment.api.github}/${environment.api.github.username}/${environment.api.github.username}/readme`;

  loadReadme$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(fetchReadme),
      exhaustMap(() =>
        this.getReadme().pipe(
          map((res: Readme) => {
            const readme = this.parseReadme(res.content);
            return fetchReadmeSuccess({ readme });
          }),
          catchError(() => of(fetchReadmeFailure))
        )
      )
    )
  );

  private getReadme() {
    return this.#http.get<Readme>(this.#apiUrl);
  }

  private parseReadme(content: string): SafeHtml {
    const decoded = this.decode(content);
    const markdown = marked.parse(decoded) as string;
    return this.#sanitizer.bypassSecurityTrustHtml(markdown);
  }

  private decode(base64: string): string {
    const text = atob(base64);
    const bytes = new Uint8Array(text.length);
    for (let i = 0; i < text.length; i++) {
      bytes[i] = text.charCodeAt(i);
    }
    const decoder = new TextDecoder('utf8');
    return decoder.decode(bytes);
  }
}

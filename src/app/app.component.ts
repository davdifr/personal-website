import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  #themeService = inject(ThemeService);
  #titleService = inject(Title);
  #appTitle = environment.appTitle;

  constructor() {
    this.#titleService.setTitle(this.#appTitle);
  }
}

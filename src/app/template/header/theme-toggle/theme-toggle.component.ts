import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  #themeService = inject(ThemeService);

  switchTheme(): void {
    this.#themeService.toggleTheme();
  }

  isDarkThemeActive(): boolean {
    return this.#themeService.isDarkThemeActive();
  }

  getThemeToggleLabel(): string {
    return this.#themeService.getToggleLabel();
  }
}

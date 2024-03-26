import { Component, HostBinding, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  #themeService = inject(ThemeService);
  rotate = false;

  switchTheme(): void {
    this.rotate = !this.rotate;
    this.#themeService.toggleTheme();
  }

  isDarkThemeActive(): boolean {
    return this.#themeService.isDarkThemeActive();
  }

  getThemeToggleLabel(): string {
    return this.#themeService.getToggleLabel();
  }
}

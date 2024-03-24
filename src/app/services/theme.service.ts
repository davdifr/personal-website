import { Injectable, WritableSignal, effect, signal } from '@angular/core';

export const storageKey = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #path: string = '/assets/themes';
  #stylesheet = document.getElementById('theme') as HTMLLinkElement;

  themeSignal = signal<string>('light');

  constructor() {
    this.initializeThemeFromPreferences();

    effect(() => {
      this.updateRenderedTheme();
    });
  }

  toggleTheme(): void {
    this.themeSignal.update(() =>
      this.isDarkThemeActive() ? 'light' : 'dark'
    );
  }

  private initializeThemeFromPreferences(): void {
    if (!this.#stylesheet) {
      this.initializeStylesheet();
    }

    const storedTheme = localStorage.getItem(storageKey);

    if (storedTheme) {
      this.themeSignal.update(() => storedTheme);
    }
  }

  private initializeStylesheet(): void {
    this.#stylesheet = document.createElement('link');
    this.#stylesheet.id = 'theme';
    this.#stylesheet.rel = 'stylesheet';

    document.head.appendChild(this.#stylesheet);
  }

  getToggleLabel(): string {
    return `Switch to ${this.isDarkThemeActive() ? 'light' : 'dark'} mode`;
  }

  isDarkThemeActive(): boolean {
    return this.themeSignal() === 'dark' ? true : false;
  }

  private updateRenderedTheme(): void {
    if (this.#stylesheet) {
      this.#stylesheet.href = `${this.#path}/${this.themeSignal()}.css`;
    }

    localStorage.setItem(storageKey, this.themeSignal());
  }
}

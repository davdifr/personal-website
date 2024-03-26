import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'template-header',
  standalone: true,
  imports: [NavbarComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // TODO: Remove when ThemeToggleComponent is implemented
  #themeService = inject(ThemeService);
}

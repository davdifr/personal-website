import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export default class NotFoundComponent {
  #themeService = inject(ThemeService);
}

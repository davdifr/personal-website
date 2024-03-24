import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class MainLayoutComponent {}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button, ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-angular');
}

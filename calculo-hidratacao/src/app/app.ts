import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hidratacao } from './hidratacao/hidratacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hidratacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculo-hidratacao');
}

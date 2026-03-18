import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HidratacaoComponent } from './hidratacao/hidratacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HidratacaoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculo-hidratacao');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UnitConverterClientApp');
}

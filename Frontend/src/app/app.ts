import { Component, signal } from '@angular/core';
import { TabsComponent } from './components/tabs/tabs';

@Component({
  selector: 'app-root',
  imports: [TabsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UnitConverterClientApp');
}

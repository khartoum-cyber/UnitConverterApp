import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterForm } from '../converter-form/converter-form';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css'],
  imports: [CommonModule, ConverterForm]
})
export class TabsComponent {
  // Array of tab names
  tabs: string[] = ['Length', 'Weight', 'Temperature'];
  // Currently selected tab
  selectedTab: string = this.tabs[0];

  // Method to switch tabs
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}

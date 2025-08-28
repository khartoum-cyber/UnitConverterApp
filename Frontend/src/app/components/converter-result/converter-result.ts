import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter-result',
  imports: [],
  templateUrl: './converter-result.html',
  styleUrl: './converter-result.css'
})
export class ConverterResult {
  @Input() result!: ConversionResult | null;
}

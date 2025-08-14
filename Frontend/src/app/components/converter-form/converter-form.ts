import { Component, Input, inject  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

interface ConversionRequest {
  Value: number;
  FromUnit: string;
  ToUnit: string;
  Category: string;
}

interface ConversionResult {
  originalValue: number;
  fromUnit: string;
  convertedValue: number;
  toUnit: string;
}

interface Units {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-converter-form',
  imports: [ ReactiveFormsModule, MatSelectModule, MatFormFieldModule ],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})
export class ConverterForm {
  readonly http = inject(HttpClient);

  @Input() selected!: 'Length' | 'Weight' | 'Temperature';
  
  get currentUnits() {
    switch (this.selected) {
      case 'Length':
        return this.lengthUnits;
      case 'Weight':
        return this.weightUnits;
      case 'Temperature':
        return this.temperatureUnits;
      default:
        return [];
    }
  }
          
  unitFrom = "";
  unitTo = "";

  converterForm = new FormGroup({
    number: new FormControl(0),
  });

  readonly lengthUnits: Units[] = [
    {value: 'cm', viewValue: 'Centimeters'},
    {value: 'ft', viewValue: 'Feet'},
    {value: 'm', viewValue: 'Meters'},
    {value: 'km', viewValue: 'Kilometers'},
  ];

  readonly weightUnits: Units[] = [
    {value: 'kg', viewValue: 'Kilograms'},
    {value: 'lb', viewValue: 'Pounds'},
  ];

  readonly temperatureUnits: Units[] = [
    {value: 'c', viewValue: 'Celsius'},
    {value: 'f', viewValue: 'Fahrenheit'},
  ];

    handleSubmit(): void {
      const payload: ConversionRequest = {
        Value: this.converterForm.value.number ?? 0,
        FromUnit: this.unitFrom,
        ToUnit: this.unitTo,
        Category: this.selected,
    };
    
    this.http.post<ConversionResult>('http://localhost:5192/api/conversion', payload)
        .subscribe({
          next: (response: ConversionResult) => {
            alert(`Converted value: ${response.originalValue} ${response.fromUnit} to ${response.convertedValue} ${response.toUnit}`)
            // Optionally show result to user
          },
          error: err => {
            console.error('Error during conversion:', err);
          }
        });
  }
}
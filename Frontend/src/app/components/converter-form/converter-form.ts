import { Component, Input, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConversionService } from '../../services/conversion.service';
import { ConverterResult } from '../converter-result/converter-result';

@Component({
  selector: 'app-converter-form',
  imports: [ ReactiveFormsModule, MatSelectModule, MatFormFieldModule, ConverterResult ],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})

export class ConverterForm {
  readonly conversionService = inject(ConversionService);

  conversionResult: ConversionResult | null = null;
  formSubmitted = false;

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
  //todo how to reset these
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
    
    this.conversionService.convert(payload).subscribe({
      next: response => {
        alert(`Converted value: ${response.originalValue} ${response.fromUnit} to ${response.convertedValue} ${response.toUnit}`);
        this.conversionResult = response;
        this.formSubmitted = true;
      },
      error: err => {
        console.error('Error during conversion:', err);
      }
    });
  }

  resetResults(): void{
    this.conversionResult = null;
    this.formSubmitted = false;
    this.converterForm.reset();
  } 
}
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface ConversionRequest {
  number: number;
  unitFrom: string;
  unitTo: string;
  category: string;
}

interface Units {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-converter-form',
  imports: [ ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})
export class ConverterForm {
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

    handleSubmit() {
    alert(this.converterForm.value.number + ' FROM ' + this.unitFrom + ' TO ' + this.unitTo);
  }
}
import { Component, Input } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Units {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-converter-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})
export class ConverterForm {
  @Input() selected!: string;
  
  unitFrom = "";
  unitTo = "";

  converterForm = new FormGroup({
    number: new FormControl(0),
  });

  lengthUnits: Units[] = [
    {value: 'cm', viewValue: 'Centimeters'},
    {value: 'ft', viewValue: 'Feet'},
    {value: 'm', viewValue: 'Meters'},
    {value: 'km', viewValue: 'Kilometers'},
  ];

  weightUnits: Units[] = [
    {value: 'kg', viewValue: 'Kilograms'},
    {value: 'lb', viewValue: 'Pounds'},
  ];

  temperatureUnits: Units[] = [
    {value: 'c', viewValue: 'Celsius'},
    {value: 'f', viewValue: 'Fahrenheit'},
  ];

    handleSubmit() {
    alert(this.converterForm.value.number + ' FROM ' + this.unitFrom + ' TO ' + this.unitTo);
  }
}

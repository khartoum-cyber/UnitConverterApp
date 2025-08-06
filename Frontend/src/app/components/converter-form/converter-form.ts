import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Units {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-converter-form',
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})
export class ConverterForm {
  @Input() selected!: string;
  
  unitFrom = "";

  converterForm = new FormGroup({
    number: new FormControl(0),
    convertFrom: new FormControl(''),
    convertTo: new FormControl(''),
  });

  lengthUnits: Units[] = [
    {value: 'mm-0', viewValue: 'Milimeters'},
    {value: 'cm-1', viewValue: 'Centimeters'},
    {value: 'm-2', viewValue: 'Meters'},
  ];

    handleSubmit() {
    alert(this.unitFrom + ' | ' + this.converterForm.value.convertTo);
  }
}

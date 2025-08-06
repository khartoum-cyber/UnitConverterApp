import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-converter-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './converter-form.html',
  styleUrl: './converter-form.css'
})
export class ConverterForm {
  @Input() selected!: string;
  
  converterForm = new FormGroup({
    number: new FormControl(0),
    convertFrom: new FormControl(''),
    convertTo: new FormControl(''),
  });

    handleSubmit() {
    alert(this.converterForm.value.convertFrom + ' | ' + this.converterForm.value.convertTo);
  }
}

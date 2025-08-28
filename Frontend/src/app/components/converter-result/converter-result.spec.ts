import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterResult } from './converter-result';

describe('ConverterResult', () => {
  let component: ConverterResult;
  let fixture: ComponentFixture<ConverterResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

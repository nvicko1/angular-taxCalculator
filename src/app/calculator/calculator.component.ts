import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  salary: number = 0;

  ngOnInit(): void {}

  taxCalculator = function (salary: number, time: string) {
    const TAX: number = 0.14;
    let calculatedTax: any;
    switch (time) {
      case 'weekly':
        calculatedTax = (salary / 4) * TAX;
        break;
      case 'fortnightly':
        calculatedTax = (salary / 2) * TAX;
        break;
      case 'monthly':
        calculatedTax = salary * TAX;
        break;
      case 'annualy':
        calculatedTax = salary * 12 * TAX;
        break;
    }

    return calculatedTax;
  };
}

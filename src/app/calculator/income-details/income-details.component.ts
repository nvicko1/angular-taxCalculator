import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css'],
})
export class IncomeDetailsComponent implements OnInit {
  income: any = 0;
  salary: string = 'weekly';
  gross: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  setIncome() {
    this.income = 0;
  }
  handleIncome(event: any) {
    this.income = event.target.value;
  }
  handleSalary(event: any) {
    this.salary = event.target.value;
  }

  

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

  netIncome = function (inc: number, time: string) {
    let netInc: any;
    const TAX: number = 0.14;
    switch (time) {
      case 'weekly':
        netInc = inc / 4 - (inc / 4) * TAX;
        break;
      case 'fortnightly':
        netInc = inc / 2 - (inc / 2) * TAX;
        break;
      case 'monthly':
        netInc = inc - inc * TAX;
        break;
      case 'annualy':
        netInc = inc * 12 - inc * 12 * TAX;
        break;
    }
    return netInc;
  };

  grossIncome = (inc: number, time: string) => {
    let salaryInc: any;
    switch (time) {
      case 'weekly':
        salaryInc = inc / 4;
        break;
      case 'fortnightly':
        salaryInc = inc / 2;
        break;
      case 'monthly':
        salaryInc = Number(inc).toFixed(2);
        break;
      case 'annualy':
        salaryInc = inc * 12;
        break;
    }
    return salaryInc;
  };
}
